import React, { useCallback } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';
import * as Keychain from 'react-native-keychain';
import { HOME } from '../../router/navigation-consts';

const Details: React.FC = () => {
  const { navigate } = useNavigation();

  const logOut = useCallback(async (): void => {
    await Keychain.resetGenericPassword();

    return navigate('Auth');
  }, [navigate]);

  const navigateHome = (): void => {
    navigate(HOME);
  };

  return (
    <>
      <SafeAreaView>
        <Text>Welcome</Text>
        <Text>To The App</Text>
        <Text>Somehow</Text>
        <Button title="Go Home" onPress={navigateHome} />
        <Button title="Log Out" onPress={logOut} />
      </SafeAreaView>
    </>
  );
};

export default Details;
