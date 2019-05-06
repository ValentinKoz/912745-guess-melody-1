import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    gameTime: 7,
    errorCount: 4,
    onClick() { },
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onClick = {settings.onClick}
      />,
      document.querySelector(`.main`)
  );
};

init();
