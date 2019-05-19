import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `artist`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
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
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
