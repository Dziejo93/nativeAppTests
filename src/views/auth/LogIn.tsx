import React, { useState, useCallback, useRef } from 'react';
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useNavigation } from '../../hooks/navigation-hooks';
import { TextInput } from 'react-native-gesture-handler';
import FormInput from '../../components/form/form-input';
import { minLengthReq } from '../../helpers/validations';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const authorize = useCallback(async (): void => {
    if (username === 'Dupa' && password === 'xd') {
      await Keychain.setGenericPassword(username, password);

      return navigate('AuthLoading');
    }
    return false;
  }, [navigate, password, username]);

  const setUserNameFunction = (text: string): void => {
    return setUsername(text.trim());
  };
  const setPasswordFunction = (text: string): void => setPassword(text.trim());

  return (
    <>
      <SafeAreaView>
        <Text>Log in</Text>
        <FormInput
          title="Username"
          input={username}
          addInput={setUserNameFunction}
          validations={{
            minLength: minLengthReq({ value: username, minLength: 5 }),
          }}
          autoCapitalize="none"
        />
        <FormInput
          title="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          input={password}
          addInput={setPasswordFunction}
          validations={{
            minLength: minLengthReq({ value: password, minLength: 5 }),
          }}
        />
        <Button title="Log In" onPress={authorize} />
      </SafeAreaView>
    </>
  );
};

export default SignIn;
