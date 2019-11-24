import { useFocusEffect } from './navigation-hooks';
import { BackHandler } from 'react-native';
import { useCallback } from 'react';

export const HandleAndroidBackButton = (): boolean => {
  useFocusEffect(
    useCallback(() => {
      const blockBackHandler = (): void => {
        console.log('handler');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', blockBackHandler);

      return (): void =>
        BackHandler.removeEventListener('hardwareBackPress', blockBackHandler);
    }, [])
  );
};
