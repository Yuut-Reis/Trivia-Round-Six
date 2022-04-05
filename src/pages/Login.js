import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = {
    name: '',
    email: '',
  }

  validatePlayButton = () => {
    const { name, email } = this.state;
    console.log('entrou');
    console.log('Length', name.length, 'Length', email.length);
    return !(name.length && email.length);
  }

  handleChange = ({ target: { name, value } }) => {
    // const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
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
        <button
          className="btn btn-primary"
          data-testid="btn-play"
          type="button"
          disabled={ this.validatePlayButton() }
          onClick={ this.handleClick }
        >
          Play
        </button>
      </form>
    );
  }
}

export default Login;
