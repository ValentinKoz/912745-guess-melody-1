import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import gameSettings from "./mocks/gameSettings.js";
import questions from "./mocks/questions.js";

const init = (gameQuestions) => {
  const {errorCount, gameTime} = gameSettings;

  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
        questions = {gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(questions);
