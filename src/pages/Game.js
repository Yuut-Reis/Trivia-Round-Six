import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchTokenAction } from '../actions/actions';
import PinkSoldier from '../assets/images/game-soldier.png';
import Header from '../components/Header';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { fetchQuestionAPI } from '../services/requestTrivia';
import styles from './Game.module.css';
import Buttons from '../components/Buttons';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsState: [],
    };
  }

  async componentDidMount() {
    const { newToken, token } = this.props;
    const request = await fetchQuestionAPI(token);
    this.setState({ questionsState: request.results });

    const ERROR_API = 3;
    if (request.response_code === ERROR_API) newToken();
  }

  render() {
    const { questionsState } = this.state;
    const { questionNumber } = this.props;
    const five = 5;
    return (
      <>
        <Header />
        <main className={ styles.main }>
          {
            questionsState.filter((item, index) => index === questionNumber)
              .map((item, index) => (
                <div key={ item.question }>
                  <Timer />
                  <Question
                    id={ index }
                    category={ item.category }
                    text={ item.question }
                    answerType={ item.type }
                    level={ item.difficulty }
                    correct={ item.correct_answer }
                    incorrect={ item.incorrect_answers }
                  />
                  <Buttons
                    id={ index }
                    category={ item.category }
                    text={ item.question }
                    answerType={ item.type }
                    level={ item.difficulty }
                    correct={ item.correct_answer }
                    incorrect={ item.incorrect_answers }
                  />
                </div>
              ))
          }
        </main>
        {
          questionNumber === five && (<Redirect to="/feedback" />)
        }
        <div className={ styles.soldiers }>
          <img src={ PinkSoldier } alt="Pink Soldier." />
          <img src={ PinkSoldier } alt="Pink Soldier." />
        </div>
      </>
    );
  }
}

Game.propTypes = {
  token: PropTypes.string.isRequired,
  newToken: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.trivia.questions,
  questionNumber: state.next.index,
});

const mapDispatchToProps = (dispatch) => ({
  newToken: () => dispatch(fetchTokenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
