import React from 'react';
import { useNavigation } from '../hooks/navigation-hooks';
import { View, Text, Button } from 'react-native';

const HelloWorld = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to details" onPress={() => navigate('Other')} />
      </View>
    </>
  );
};

export default HelloWorld;
