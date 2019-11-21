import { useEffect, useState } from 'react';
import { useNavigation } from './navigation-hooks';

import * as Keychain from 'react-native-keychain';

const useIsAuthorisedHook = () => {
  const [credentials, setCredentials] = useState(false);
  const [loading, setLoading] = useState('false');

  useEffect(() => {
    (async () => {
      const { navigate } = useNavigation();
      setLoading('true');

      const username: string = 'zuck';
      const password: string = 'poniesRgr8';

      await Keychain.setGenericPassword(username, password);
      try {
        // Retrieve the credentials
        const credentialsChecked = await Keychain.getGenericPassword();

        if (credentialsChecked) {
          console.log('Credentials successfully loaded for user ');
          setLoading('false');
          navigate('App');
        } else {
          console.log('No credentials stored');
          navigate('Auth');
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
        setLoading('false');
      }
    })();
  }, []);

  return [credentials, loading];
};

export default useIsAuthorisedHook;
