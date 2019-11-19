import 'react-native';
import React from 'react';
import App from '../src/App';

import {render} from 'react-native-testing-library';
import {View} from 'react-native';

describe('testing describe', () => {
  it('renders correctly', () => {
    const {getAllByType} = render(<App />);

    expect(getAllByType(View)).toBeDefined();
  });
});
