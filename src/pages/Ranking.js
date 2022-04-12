import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    return (
      <>
        <h1 data-testid="ranking-title"> Ranking </h1>
        <Link to="/">
          <input type="button" data-testid="btn-go-home" value="Play Again" />
        </Link>
      </>
    );
  }
}

export default Ranking;
