import React, { FC, ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

export interface ErrorMessageInterface {
  visible: boolean;
  errorMessageString: string;
  children?: ReactNode;
}

const styles = StyleSheet.create({
  errorMessage: { color: 'red' },
});

const ErrorMessage: FC<ErrorMessageInterface> = ({
  visible,
  errorMessageString,
}) => {
  if (visible) {
    return (
      <>
        <Text style={styles.errorMessage}>{errorMessageString}</Text>
      </>
    );
  }

  return <></>;
};

export default ErrorMessage;
