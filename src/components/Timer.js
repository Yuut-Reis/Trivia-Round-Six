import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetTimeAction, timeAction } from '../actions/actions';
import styles from './Timer.module.css';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      time: 30,
      initialTimer: '',
    };
  }

  componentDidMount() {
    const ONE_SEC = 1000;
    const FIVE_SEC = 5000;
    const initialTimer = setTimeout(() => {
      const timer = setInterval(() => {
        this.setState((prevState) => ({ time: prevState.time - 1 }), () => {
          const { time } = this.state;
          const { timeDispatch } = this.props;
          timeDispatch(time);
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
      this.setState({
        timer,
      });
      document.getElementById('timer').style = 'opacity: 1; position: relative;';
    }, FIVE_SEC);
    this.setState({
      initialTimer,
    });
  }

  componentDidUpdate() {
    const { initialTimer, timer } = this.state;
    const { resetTime, resetTimeDispatch } = this.props;
    if (resetTime) {
      clearTimeout(initialTimer);
      clearInterval(timer);
      resetTimeDispatch(false);
    }
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

const mapStateToProps = (state) => ({
  resetTime: state.timer.resetTime,
});

const mapDispatchToProps = (dispatch) => ({
  timeDispatch: (time) => dispatch(timeAction(time)),
  resetTimeDispatch: (reset) => dispatch(resetTimeAction(reset)),

});

Timer.propTypes = {
  resetTime: PropTypes.bool.isRequired,
  resetTimeDispatch: PropTypes.func.isRequired,
  timeDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
