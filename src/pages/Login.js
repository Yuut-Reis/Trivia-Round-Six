import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DiAptana } from 'react-icons/di';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestionAction, fetchTokenAction, playerAction } from '../actions';
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
    this.setState({
      [name]: value,
    });
  }

  dispatches = async () => {
    const { token, player, tokenState, questions, history } = this.props;
    const { email, name } = this.state;
    await token();
    player(email, name);
    await questions(tokenState);
    history.push('/game');
  };

  render() {
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
          <button
            className="btn btn-lg btn-primary"
            data-testid="btn-play"
            type="button"
            disabled={ this.validatePlayButton() }
            onClick={ this.dispatches }
          >
            Play
          </button>
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
  player: PropTypes.func.isRequired,
  questions: PropTypes.func.isRequired,
  tokenState: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  tokenState: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  token: () => dispatch(fetchTokenAction()),
  player: (email, nome) => dispatch(playerAction(email, nome)),
  questions: (token) => dispatch(fetchQuestionAction(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
