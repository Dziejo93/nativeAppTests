import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../hooks/navigation-hooks';

const HelloWorld = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <View>
        <Text>DupaXd</Text>
      </View>
      <View>
        <Text>DupaXd</Text>
      </View>
      <View>
        <Text>DupaXd</Text>
      </View>
      <Button title="Go Home" onPress={() => navigate('Home')} />
      <Button title="Log Out" onPress={() => navigate('Auth')} />
    </>
  );
};

export default HelloWorld;
