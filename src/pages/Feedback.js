import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import styles from './Feedback.module.css';

class Feedback extends Component {
  render() {
    const { acertos } = this.props;
    const MIN_GOOD = 3;
    return (
      <>
        <Header />
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
        </main>
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