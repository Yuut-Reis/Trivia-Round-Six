import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Question extends Component {
  render() {
    const {
      // id,
      category,
      text,
      correct,
      incorrect } = this.props;
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
                      type="button"
                    >
                      {alternativa}
                    </button>
                  )
                  : (
                    <button
                      key={ alternativa }
                      data-testid={ `wrong-answer-${index}` }
                      type="button"
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
