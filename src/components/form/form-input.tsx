import React, { FC, useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { MinLengthReqResultInterface } from '../../helpers/validations';
import ErrorMessage from './error-message';

const styles = StyleSheet.create({
  textInput: { backgroundColor: 'grey' },
  errorMessage: { color: 'red' },
});

export interface FormProps {
  title: string;
  input: string;
  addInput: void;
  validations: {
    minLength: MinLengthReqResultInterface;
  };
  otherProps: {
    autoCapitalize: string;
    secureTextEntry: boolean;
  };
}

const FormInput: FC = ({
  title,
  addInput,
  input,
  validations,
  ...otherProps
}: FormProps) => {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const invalidEntry = Object.keys(validations).find(validation => {
    if (validations[validation].invalid) {
      return validation;
    }
  });

  const { invalid = false, errorMessage = '' } =
    validations[invalidEntry] || {};

  useEffect(() => {
    if (input.length > 0 && !touched) {
      setTouched(true);
    }
    if (invalid && touched) {
      return setError(errorMessage);
    }
    return setError('');
  }, [addInput, errorMessage, input.length, invalid, touched]);

  return (
    <>
      <Text> {title}</Text>
      <TextInput
        onChangeText={addInput}
        value={input}
        style={styles.textInput}
        {...otherProps}
      />
      <ErrorMessage visible={error} errorMessageString={error} />
    </>
  );
};

export default FormInput;
