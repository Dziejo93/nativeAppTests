import 'react-native';
import React from 'react';
import App from '../src/App';

import { render } from 'react-native-testing-library';

describe('testing describe', () => {
  it('renders correctly', () => {
    const { getAllByType } = render(<App />);

    // expect(getAllByType('Router')).toBeDefined();
  });
});
