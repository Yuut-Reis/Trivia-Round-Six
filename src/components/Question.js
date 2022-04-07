import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Question extends Component {
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
    } else {
      target.style.border = '3px solid rgb(255, 0, 0)';
      const right = document.querySelectorAll('.correct-answer');
      right.forEach((item) => {
        item.style.border = '3px solid rgb(6, 240, 15)';
      });
    }
  }

  handleCorrectAnswer = () => {
    // this.setState({ style: 'correct-answer' });
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
};

export default Question;
