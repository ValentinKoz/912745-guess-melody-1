import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App
      gameTime={0}
      errorCount={0}
      questions={[]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
