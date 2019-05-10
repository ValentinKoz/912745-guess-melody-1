import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "./../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "./../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "./../genre-question-screen/genre-question-screen.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  _getScreen(question, onClick) {
    if (!question) {
      const {
        errorCount,
        gameTime,
      } = this.props;

      return <WelcomeScreen
        errorCount={errorCount}
        gameTime={gameTime}
        onClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={onClick}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={onClick}
      />;

      default: return null;
    }
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return <section className="game game--artist">

      {this._getScreen(questions[question], () => {
        this.setState({
          question: question + 1 >= questions.length
            ? -1
            : question + 1,
        });
      })}
    </section>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
