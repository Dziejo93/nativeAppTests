import React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';

const authStyles = StyleSheet.create({
  layout: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const Auth: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateTo = (routeName: string) => (): void => {
    return navigate(routeName);
  };
  return (
    <>
      <SafeAreaView style={authStyles.layout}>
        <Button title="Sign up" onPress={navigateTo('SignIn')} />
        <Button title="Login" onPress={navigateTo('Login')} />
      </SafeAreaView>
    </>
  );
};

export default Auth;
