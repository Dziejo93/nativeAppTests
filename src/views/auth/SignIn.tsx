import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';

const SignIn = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <View>
        <Text>Sign In</Text>
        <Button
          title="Sign In"
          onPress={() => {
            navigate('Login');
          }}
        />
      </View>
    </>
  );
};

export default SignIn;
