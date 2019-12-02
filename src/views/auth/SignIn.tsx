import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';
import { LOGIN } from '../../router/navigation-consts';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToLogin = (): void => {
    navigate(LOGIN);
  };

  return (
    <>
      <View>
        <Text>Sign In</Text>
        <Button title="Sign In" onPress={navigateToLogin} />
      </View>
    </>
  );
};

export default SignIn;
