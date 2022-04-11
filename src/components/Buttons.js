import { decode } from 'he';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextAction, scoreAction, resetTimeAction } from '../actions/actions';
import styles from './Buttons.module.css';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonsArray: [],
      showNext: false,
    };
  }

  componentDidMount() {
    const {
      correct,
      incorrect } = this.props;
    const options = [...incorrect, correct];

    // Embaralhar array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // Transformar elementos HTML em array: https://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript
    const randomButtons = [...options]
      .map((alternativa, index) => (
        index === options.length - 1
          ? (
            <button
              key={ alternativa }
              data-testid="correct-answer"
              className="correct-answer"
              type="button"
              onClick={ this.handleClick }
            >
              {decode(alternativa)}
            </button>
          )
          : (
            <button
              key={ alternativa }
              data-testid={ `wrong-answer-${index}` }
              className="wrong-answer"
              type="button"
              onClick={ this.handleClick }
            >
              {decode(alternativa)}
            </button>
          )
      ))
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    this.setState({
      buttonsArray: randomButtons,
    });
  }

  handleClick = ({ target }) => {
    const { resetTimeDispatch } = this.props;
    resetTimeDispatch(true);
    const element = target.getAttribute('data-testid');

    if (element === 'correct-answer') {
      target.style.border = '3px solid rgb(6, 240, 15)';
      this.handleCorrectAnswer();
    } else {
      target.style.border = '3px solid rgb(255, 0, 0)';
      const right = document.querySelector('.correct-answer');
      right.style.border = '3px solid rgb(6, 240, 15)';
    }

    this.showNextButton();

    const wrong = document.querySelectorAll('.wrong-answer');
    wrong.forEach((item) => {
      item.style.border = '3px solid rgb(255, 0, 0)';
    });
  }

  handleCorrectAnswer = () => {
    const { level, scoreDispatch, acertos, time } = this.props;
    console.log(acertos);

    let difficulty = 0;
    const number = 10;
    const tree = 3;

    if (level === 'hard') {
      difficulty = tree;
    } else if (level === 'medium') {
      difficulty = 2;
    } else {
      difficulty = 1;
    }

    const newScore = (number + (time * difficulty));
    scoreDispatch(acertos + 1, newScore);
  }

  showNextButton = () => {
    this.setState({
      showNext: true,
    });
  }

  handleClickNext = () => {
    const { nextDispatch } = this.props;
    nextDispatch();
  }

  render() {
    const { showNext, buttonsArray } = this.state;
    return (
      <>
        <div data-testid="answer-options" className={ styles.options }>
          {
            buttonsArray.map(
              (button) => (
                <button
                  key={ button.key }
                  type="button"
                  data-testid={ button.props['data-testid'] }
                  className={ button.props.className }
                  onClick={ this.handleClick }
                >
                  {button.props.children}
                </button>),
            )
          }
        </div>
        {
          showNext && (
            <button
              data-testid="btn-next"
              type="button"
              onClick={ this.handleClickNext }
              className={ styles.next }
            >
              <p>Next</p>
            </button>
          )
        }

      </>
    );
  }
}

Buttons.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.any).isRequired,
  level: PropTypes.string.isRequired,
  scoreDispatch: PropTypes.func.isRequired,
  nextDispatch: PropTypes.func.isRequired,
  acertos: PropTypes.number.isRequired,
  resetTimeDispatch: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  acertos: state.player.assertions,
  time: state.timer.time,
});

const mapDispatchToProps = (dispatch) => ({
  scoreDispatch: (assertions, score) => dispatch(scoreAction(assertions, score)),
  nextDispatch: () => dispatch(nextAction()),
  resetTimeDispatch: (resetTime) => dispatch(resetTimeAction(resetTime)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
