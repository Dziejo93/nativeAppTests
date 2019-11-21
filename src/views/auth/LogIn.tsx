import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';

const SignIn = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <View>
        <Text>Further down the drain</Text>
        <Button
          title="I'm done kill me"
          onPress={() => {
            navigate('App');
          }}
        />
      </View>
    </>
  );
};

export default SignIn;
