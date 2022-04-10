import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    const imgSrc = md5(gravatarEmail).toString();
    return (
      <header className={ styles.header }>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${imgSrc}` }
          alt="Profile."
        />
        <p
          data-testid="header-player-name"
        >
          {name}
        </p>
        <span data-testid="header-score">{score}</span>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.email,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
