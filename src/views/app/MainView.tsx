import React from 'react';
import { useNavigation } from '../../hooks/navigation-hooks';
import { HandleAndroidBackButton } from '../../hooks/handle-android-back-button-hook';
import { View, Text, Button, Platform } from 'react-native';

const MainView: React.FC = () => {
  const { navigate } = useNavigation();

  if (Platform.OS === 'android') HandleAndroidBackButton();

  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`It' s still not done`}</Text>
        <Button
          title="Go to details"
          onPress={(): void => navigate('Details')}
        />
      </View>
    </>
  );
};

export default MainView;
