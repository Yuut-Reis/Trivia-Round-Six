import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTokenAction } from '../actions';
import Header from '../components/Header';
import Question from '../components/Question';

class Game extends Component {
  state = {
    questionsState: [],
  }

  async componentDidMount() {
    const { newToken, questions } = this.props;
    this.setState({ questionsState: questions.results });

    const ERROR_API = 3;
    if (questions.response_code === ERROR_API) newToken();
  }

  render() {
    const { questionsState } = this.state;
    return (
      <>
        <Header />
        {
          questionsState.map((question) => (
            <Question
              key={ question.question }
              category={ question.category }
              text={ question.question }
              answerType={ question.type }
              level={ question.difficulty }
              correct={ question.correct_answer }
              incorrect={ question.incorrect_answers }
            />
          ))
        }
      </>

    );
  }
}

Game.propTypes = {
  questions: PropTypes.objectOf(PropTypes.any).isRequired,
  newToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.trivia.questions,
});

const mapDispatchToProps = (dispatch) => ({
  newToken: () => dispatch(fetchTokenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
