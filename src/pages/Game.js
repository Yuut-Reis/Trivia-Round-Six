import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Game extends Component {
  componentDidMount() {
    const { tokenProp } = this.props;
    console.log(tokenProp);
  }

  render() {
    return (
      <Header />
    );
  }
}

Game.propTypes = {
  tokenProp: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  tokenProp: state.token,
});

export default connect(mapStateToProps)(Game);
