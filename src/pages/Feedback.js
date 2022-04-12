import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Feedback.module.css';

class Feedback extends Component {
  render() {
    const { acertos, pontuação } = this.props;
    const MIN_GOOD = 3;
    return (
      <>
        <Header />
        <p data-testid="feedback-total-score">
          {pontuação}
        </p>
        <p data-testid="feedback-total-question">
          {acertos}
        </p>
        <main className={ styles.main }>
          {
            acertos < MIN_GOOD ? (
              <>
                <p data-testid="feedback-text">Could be better...</p>
                <img src="https://c.tenor.com/y8SmzfXWrpUAAAAC/squid-game.gif" alt="Pink soldier shooting at camera." />
              </>
            ) : (
              <>
                <p data-testid="feedback-text">Well Done!</p>
                <img src="https://i0.wp.com/genxsingapore.com/wp-content/uploads/2021/10/moneybank.gif?resize=520%2C292&ssl=1" alt="Money falling inside giant pig vault." />
              </>
            )
          }
          <Link to="/">
            <input type="button" data-testid="btn-play-again" value="Play Again" />
          </Link>

          <Link to="ranking/">
            <input type="button" data-testid="btn-ranking" value="Ranking" />
          </Link>
        </main>
      </>
    );
  }
}

Feedback.propTypes = {
  acertos: PropTypes.number.isRequired,
  pontuação: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  acertos: state.player.assertions,
  pontuação: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
