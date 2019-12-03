import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

export interface ErrorMessageInterface {
  visible: boolean;
  errorMessageString: string;
}

const styles = StyleSheet.create({
  errorMessage: { color: 'red' },
});

const ErrorMessage: FC = ({
  visible,
  errorMessageString,
}: ErrorMessageInterface) => {
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
