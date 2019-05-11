import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

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

it(`Artist Question correctly workk`, () => {
  const {question} = mock;
  const clickHandler = jest.fn();
  const gameScreen = shallow(<ArtistQuestionScreen
    question={question}
    onAnswer={clickHandler}
  />);
  const form = gameScreen.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`change`, {
    preventDefault: formSendPrevention,
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
