import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timeAction } from '../actions/actions';
import styles from './Timer.module.css';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      time: 30,
    };
  }

  componentDidMount() {
    const ONE_SEC = 1000;
    const FIVE_SEC = 5000;

    setTimeout(() => {
      const timer = setInterval(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 }, () => {
          if (time === 1) {
            clearInterval(timer); // Para o timer

            // Colore os botões
            const buttons = document.querySelectorAll('button');
            buttons.forEach((singleButton) => {
              if (singleButton.getAttribute('data-testid') !== 'btn-next') {
                singleButton.setAttribute('disabled', true);
              }
              if (singleButton.getAttribute('data-testid') === 'correct-answer') {
                singleButton.style.border = '3px solid rgb(6, 240, 15)';
                const wrong = document.querySelectorAll('.wrong-answer');
                wrong.forEach((item) => {
                  item.style.border = '3px solid rgb(255, 0, 0)';
                });
              }
            });
          }
        });
      }, ONE_SEC);
      document.getElementById('timer').style = 'opacity: 1; position: relative;';
    }, FIVE_SEC);
  }

  render() {
    const { time } = this.state;
    return (
      <div id="timer" className={ styles.timer }>
        <p>{time}</p>
        <div className={ styles.progressBar }>
          <div />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  timeDispatch: (time) => dispatch(timeAction(time)),
});

export default connect(null, mapDispatchToProps)(Timer);
