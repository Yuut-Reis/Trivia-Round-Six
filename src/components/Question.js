import { decode } from 'he';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Question.module.css';

class Question extends Component {
  render() {
    const {
      category,
      text } = this.props;
    return (
      <section className={ styles.question }>
        <h1 data-testid="question-category">{category}</h1>
        <p data-testid="question-text">{decode(text)}</p>
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
