import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';
import { AUTH_LOADING } from '../../router/navigation-consts';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();
  const navigateToAuthLoading = (): void => {
    navigate(AUTH_LOADING);
  };

  return (
    <>
      <View>
        <Text>Login</Text>
        <Button title="Log out" onPress={navigateToAuthLoading} />
      </View>
    </>
  );
};

export default SignIn;
