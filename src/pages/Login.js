import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DiAptana } from 'react-icons/di';
import fetchTokenAction from '../actions';
import './Login.css';

class Login extends Component {
  state = {
    name: '',
    email: '',
  }

  validatePlayButton = () => {
    const { name, email } = this.state;
    return !(name.length && email.length);
  }

  handleChange = ({ target: { name, value } }) => {
    // const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { token } = this.props;
    const { name, email } = this.state;
    return (
      <div>
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

        <Link to="/settings">
          <button
            data-testid="btn-settings"
            type="button"
          >
            <DiAptana />
          </button>
        </Link>
      </div>
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
