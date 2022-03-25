import React from 'react';

import renderer from 'react-test-renderer';

import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {ScreenModal} from '../ScreenModal';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ScreenModal />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
