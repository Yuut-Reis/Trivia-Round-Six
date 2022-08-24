import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Feedback.module.css';
import playerStorage from '../components/FeedbackStorage';

class Feedback extends Component {
  componentDidMount() {
    const { nome, img, pontuação } = this.props;
    playerStorage(nome, img, pontuação);
  }

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
  nome: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  acertos: state.player.assertions,
  pontuação: state.player.score,
  nome: state.player.name,
  img: state.token,
});

export default connect(mapStateToProps)(Feedback);
