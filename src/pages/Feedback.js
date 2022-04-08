import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { acertos } = this.props;
    const MIN_GOOD = 3;
    return (
      <>
        <Header />
        <p data-testid="feedback-text">
          {acertos < MIN_GOOD ? 'Could be better...' : 'Well Done!'}
        </p>
      </>
    );
  }
}

Feedback.propTypes = {
  acertos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  acertos: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
