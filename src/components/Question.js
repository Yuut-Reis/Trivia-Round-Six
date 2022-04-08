import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Question extends Component {
  render() {
    const {
      category,
      text } = this.props;
    console.log('Render Questions');
    return (
      <section>
        <h1 data-testid="question-category">{category}</h1>
        <p data-testid="question-text">{text}</p>
        <div data-testid="answer-options" />
      </section>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Question;
