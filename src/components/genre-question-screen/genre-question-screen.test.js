import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  question: {
    type: `genre`,
    genre: `folk`,
    answers: [
      {
        src: ``,
        genre: `blues`,
      },
      {
        src: ``,
        genre: `folk`,
      },
      {
        src: ``,
        genre: `jazz`,
      },
    ],
  }
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const {question} = mock;
  const tree = renderer
    .create(<GenreQuestionScreen
      question={question}
      onAnswer={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
