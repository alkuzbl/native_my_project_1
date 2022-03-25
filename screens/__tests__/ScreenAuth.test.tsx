import React from 'react';

import renderer from 'react-test-renderer';

import {ScreenAuth} from '../ScreenAuth';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ScreenAuth />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
