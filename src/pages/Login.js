import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import tokenAction, { fetchTokenAction } from '../actions';
import { fetchTokenAPI } from '../services/requestTrivia';
import './Login.css';

class Login extends Component {
  state = {
    name: '',
    email: '',
  }

  validatePlayButton = () => {
    const { name, email } = this.state;
    // console.log('entrou');
    // console.log('Length', name.length, 'Length', email.length);
    return !(name.length && email.length);
  }

  handleChange = ({ target: { name, value } }) => {
    // const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { token } = this.props;
    const resolve = token();
    // const token = Object.entries(resolve).filter(([key]) => key === 'token');
    console.log(resolve);
    token(resolve);
  }

  render() {
    const { token } = this.props;
    const { name, email } = this.state;
    return (
      <form>
        <div className="input-group">
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Nome"
            value={ name }
            onChange={ this.handleChange }
            data-testid="input-player-name"
          />
          <input
            data-testid="input-gravatar-email"
            id="email"
            name="email"
            className="form-control"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
          />
        </div>
        <Link to="/game">
          <button
            className="btn btn-lg btn-primary"
            data-testid="btn-play"
            type="button"
            disabled={ this.validatePlayButton() }
            onClick={ token }
          >
            Play
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  token: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  token: () => dispatch(fetchTokenAction()),
});

export default connect(null, mapDispatchToProps)(Login);
