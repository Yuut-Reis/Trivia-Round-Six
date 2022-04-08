import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timeAction } from '../actions';

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
        const { timeDispatch } = this.props;
        this.setState({ time: time - 1 }, () => {
          if (time === 1) {
            clearInterval(timer); // Para o timer

            // Colore os botões
            const buttons = document.querySelectorAll('button');
            buttons.forEach((singleButton) => {
              singleButton.setAttribute('disabled', true);
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
        // timeDispatch(time);
      }, ONE_SEC);
    }, FIVE_SEC);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <p>{time}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  timeDispatch: (time) => dispatch(timeAction(time)),
});

export default connect(null, mapDispatchToProps)(Timer);
