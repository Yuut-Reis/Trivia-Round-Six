import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreAction } from '../actions';

class Question extends Component {
  constructor() {
    super();

    this.state = {
      assertions: 0,
    };
  }

  handleClick = ({ target }) => {
    console.log(target);
    const element = target.getAttribute('data-testid');
    console.log(element);
    if (element === 'correct-answer') {
      target.style.border = '3px solid rgb(6, 240, 15)';
      const wrong = document.querySelectorAll('.wrong-answer');
      wrong.forEach((item) => {
        item.style.border = '3px solid rgb(255, 0, 0)';
      });
      this.handleCorrectAnswer();
    } else {
      target.style.border = '3px solid rgb(255, 0, 0)';
      const right = document.querySelectorAll('.correct-answer');
      right.forEach((item) => {
        item.style.border = '3px solid rgb(6, 240, 15)';
      });
      this.handleWrongAnswer();
    }
  }

  handleCorrectAnswer = () => {
    const { assertions } = this.state;
    const { level, scoreDispatch } = this.props;
    let difficulty = 0;
    const number = 10;
    const time = 5;
    const tree = 3;

    if (level === 'hard') {
      difficulty = tree;
    } else if (level === 'medium') {
      difficulty = 2;
    } else {
      difficulty = 1;
    }

    const newScore = (number + (time * difficulty));
    console.log('newScore: ', newScore);
    const newAssertions = assertions + 1;
    scoreDispatch(newAssertions, newScore);
  }

  handleWrongAnswer = () => {
    // this.setState({ style: 'wrong-answer' });
  }

  render() {
    const {
      // id,
      category,
      text,
      correct,
      incorrect } = this.props;
    // const { style } = this.state;
    const options = [...incorrect, correct];
    return (
      <section>
        <h1 data-testid="question-category">{category}</h1>
        <p data-testid="question-text">{text}</p>
        <div data-testid="answer-options">
          {
            // Embaralhar array: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            // Transformar elementos HTML em array: https://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript
            [...options
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
                      {alternativa}
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
                      {alternativa}
                    </button>
                  )
              ))]
              .map((value) => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value)
          }
        </div>
      </section>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.any).isRequired,
  level: PropTypes.string.isRequired,
  scoreDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  scoreDispatch: (assertions, score) => dispatch(scoreAction(assertions, score)),
});

export default connect(null, mapDispatchToProps)(Question);
