import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `artist`,
      src: ``,
    },
    answers: [
      {
        picture: ``,
        artist: `artist`,
      },
      {
        picture: ``,
        artist: `QQQQQ`,
      },
      {
        picture: ``,
        artist: `WWWWWW`,
      },
    ],
  }
};

it(`ArtistQuestionScreen is renders correctly`, () => {
  const {question} = mock;
  const tree = renderer
    .create(<ArtistQuestionScreen
      onAnswer={jest.fn()}
      question={question}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
