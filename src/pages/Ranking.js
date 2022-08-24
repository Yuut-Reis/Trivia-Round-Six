import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    const myStorage = JSON.parse(localStorage.getItem('player'));
    return (
      <>
        <h1 data-testid="ranking-title"> Ranking </h1>
        <Link to="/">
          <input type="button" data-testid="btn-go-home" value="Play Again" />
        </Link>
        {myStorage.map((element, index) => (
          <div key={ element.name }>
            <p data-testid={ `player-name-${index}` }>{element.name}</p>
            <p data-testid={ `player-score-${index}` }>{element.score}</p>
            <img
              data-testid="header-profile-picture"
              src={ `https://www.gravatar.com/avatar/${element.img}` }
              alt="Profile."
            />
          </div>
        ))}
      </>
    );
  }
}

export default Ranking;
