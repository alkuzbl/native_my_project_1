import React from 'react';

import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {ScreenProfile} from '../ScreenProfile';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ScreenProfile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
