import React, { useState, useCallback, useEffect } from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useNavigation } from '../../hooks/navigation-hooks';
import FormInput from '../../components/form/form-input';
import { minLengthReq } from '../../helpers/validations';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [valid, setFormValid] = useState(true);

  const authorize = useCallback(async (): void => {
    if (username === 'Good' && password === 'password') {
      await Keychain.setGenericPassword(username, password);

      return navigate('AuthLoading');
    }
    return false;
  }, [navigate, password, username]);

  const setUserNameFunction = (text: string): void => {
    return setUsername(text.trim());
  };
  const setPasswordFunction = (text: string): void => setPassword(text.trim());

  const userNameValidations = {
    minLength: minLengthReq({ value: username, minLength: 4 }),
  };
  const passwordValidations = {
    minLength: minLengthReq({ value: password, minLength: 2 }),
  };

  useEffect(() => {
    if (
      !userNameValidations.minLength.invalid &&
      !passwordValidations.minLength.invalid
    ) {
      setFormValid(false);
    }
  }, [passwordValidations.minLength, userNameValidations.minLength, valid]);

  return (
    <>
      <SafeAreaView>
        <Text>Log in</Text>
        <FormInput
          title="Username"
          input={username}
          addInput={setUserNameFunction}
          validations={userNameValidations}
          autoCapitalize="none"
        />
        <FormInput
          title="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          input={password}
          addInput={setPasswordFunction}
          validations={passwordValidations}
        />
        <Button title="Log In" disabled={valid} onPress={authorize} />
      </SafeAreaView>
    </>
  );
};

export default SignIn;
