import 'react-native';
import React from 'react';
import FormInput from '../src/components/form/form-input';
import { minLengthReq } from '../src/helpers/validations';

import { fireEvent, render } from 'react-native-testing-library';

const factory = settings => render(<FormInput {...settings} />);

describe('testing describe', () => {
  let addInput;

  beforeEach(() => {
    addInput = jest.fn();
  });

  it('renders correctly', () => {
    const wrapper = factory({
      title: 'xd',
      input: '',
      validations: { minLength: 0, errorMessage: '' },
    });

    expect(wrapper.toJSON()).toBeDefined();
  });

  it('calls input callback', () => {
    const { getByType } = factory({
      title: 'xd',
      input: '',
      addInput,
      validations: {
        minLength: minLengthReq({ value: '', minLength: 3 }),
      },
    });
    const input = getByType('TextInput');
    const testText = 'Changed text';

    expect(input).toBeDefined();

    fireEvent(input, 'onChangeText', testText);

    expect(addInput).toHaveBeenCalledWith(testText);
  });
});
