import React, { FC, useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { MinLengthReqResultInterface } from '../../helpers/validations';

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

  const { valid, errorMessage } = validations.minLength;

  useEffect(() => {
    if (valid) {
      return (): void => {
        setError(errorMessage);
      };
    }
    return (): void => {
      setError('');
    };
  }, [errorMessage, input.length, valid]);

  return (
    <>
      <Text> {title}</Text>
      <TextInput
        onChangeText={addInput}
        value={input}
        style={styles.textInput}
        {...otherProps}
      />
      <Text style={styles.errorMessage}> {error} </Text>
    </>
  );
};

export default FormInput;
