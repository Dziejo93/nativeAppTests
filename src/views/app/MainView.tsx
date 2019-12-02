import React from 'react';
import { Text, Button, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';
import { HandleAndroidBackButton } from '../../hooks/handle-android-back-button-hook';

const MainView: React.FC = () => {
  if (Platform.OS === 'android') HandleAndroidBackButton();

  const { navigate } = useNavigation();

  const navigateToDetails = (): void => {
    navigate('Details');
  };

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`It' s still not done`}</Text>
        <Button title="Go to details" onPress={navigateToDetails} />
      </SafeAreaView>
    </>
  );
};

export default MainView;
