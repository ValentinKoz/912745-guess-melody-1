import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  isPlaying: false,
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
};

it(`AudioPlayer correctly work`, () => {
  const {src, isPlaying} = mock;
  const clickHandler = jest.fn();

  const player = mount(<AudioPlayer
    src={src}
    isPlaying={isPlaying}
    onPlayButtonClick={clickHandler}
  />);
  const button = player.find(`button`);
  expect(player.state().isPlaying).toEqual(false);
  button.simulate(`click`, {
    preventDefault: player.setState({isPlaying: !player.state().isPlaying}),
  });
  expect(player.state().isPlaying).toEqual(true);

});
