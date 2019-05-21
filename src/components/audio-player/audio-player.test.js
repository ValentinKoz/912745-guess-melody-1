import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  isPlaying: false,
};

it(`AudioPlayer is rendered correctly`, () => {
  const {src, isPlaying} = mock;
  const tree = renderer
    .create(<AudioPlayer
      src={src}
      isPlaying={isPlaying}
      onPlayButtonClick={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
