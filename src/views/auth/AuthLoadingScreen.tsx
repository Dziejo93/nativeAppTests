import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import { useNavigation } from '../../hooks/navigation-hooks';
// import useIsAuthorisedHook from '../../hooks/authorisation-hooks';
import * as Keychain from 'react-native-keychain';
import { View, Text } from 'react-native';

const AuthLoadingScreen = () => {
  enableScreens();

  const { navigate } = useNavigation();

  useEffect(() => {
    const checkIf = async () => {
      const username: string = 'xd';
      const password: string = 'poniesRgr8';

      await Keychain.setGenericPassword(username, password);
      try {
        const credentialsChecked = await Keychain.getGenericPassword();

        if (!credentialsChecked) {
          console.log('Credentials successfully loaded for user ');
          navigate('App');
        } else {
          console.log('No credentials stored');
          navigate('Auth');
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
        navigate('Auth');
      }
    };
    checkIf();
  }, [navigate]);

  return (
    <>
      <View>
        <Text>Welcome to the app</Text>
        <Text>WTF</Text>
      </View>
    </>
  );
};

export default AuthLoadingScreen;
