import 'react-native';
import React from 'react';
import FormInput from '../src/components/form/form-input';

import { render, RenderAPI } from 'react-native-testing-library';

const factory = (settings: any): RenderAPI =>
  render(<FormInput {...settings} />);

describe('testing describe', () => {
  it('renders correctly', () => {
    const wrapper = factory({
      title: 'xd',
      validations: { minLength: 0, errorMessage: '' },
    });

    expect(wrapper.toJSON()).toBeDefined();
  });

  it('renders error', () => {
    const wrapper = factory({
      title: 'xd',
      validations: { minLength: 3, errorMessage: 'Error' },
    });
    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toBeDefined();
  });
});
