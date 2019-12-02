import React, { useEffect } from 'react';
import { useNavigation } from '../hooks/navigation-hooks';
import * as Keychain from 'react-native-keychain';
import { View, Text } from 'react-native';

const AuthLoadingScreen: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect((): void => {
    const getUser = async (): void => {
      try {
        const credentialsChecked = await Keychain.getGenericPassword();

        if (credentialsChecked) {
          return navigate('App');
        }
        return navigate('Auth');
      } catch (error) {
        throw Error(error);
      }
    };

    getUser();
  }, [navigate]);

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading</Text>
        <Text>WTF</Text>
      </View>
    </>
  );
};

export default AuthLoadingScreen;

// useEffect(() => {
//   const checkIf = async () => {
//     const username = 'xd';
//     const password = 'poniesRgr8';

//     await Keychain.setGenericPassword(username, password);
//     try {
//       const credentialsChecked = await Keychain.getGenericPassword();

//       if (credentialsChecked) {
//         console.log('Credentials successfully loaded for user ');
//         navigate('App');
//       } else {
//         console.log('No credentials stored');
//         navigate('Auth');
//       }
//     } catch (error) {
//       console.log("Keychain couldn't be accessed!", error);
//       navigate('Auth');
//     }
//   };
//   checkIf();
// }, [navigate]);
