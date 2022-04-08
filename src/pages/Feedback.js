import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = { }

  render() {
    const { gravatarEmail, score, name } = this.props;
    const imgSrc = md5(gravatarEmail).toString();
    return (
      <header data-testid="feedback-text">
        Feedback
        <img src={ imgSrc } alt="profile" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.email,
  score: state.player.score,
  name: state.player.name,
});

Feedback.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
