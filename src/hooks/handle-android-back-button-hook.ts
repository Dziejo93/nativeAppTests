import { useFocusEffect } from './navigation-hooks';
import { BackHandler } from 'react-native';
import { useCallback } from 'react';

export const HandleAndroidBackButton = (): void => {
  useFocusEffect(
    useCallback(() => {
      const blockBackHandler = (): boolean => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', blockBackHandler);

      return (): void =>
        BackHandler.removeEventListener('hardwareBackPress', blockBackHandler);
    }, [])
  );
};
