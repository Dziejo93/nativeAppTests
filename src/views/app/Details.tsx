import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '../../hooks/navigation-hooks';
import { HOME, AUTH } from '../../router/navigation-consts';

const Details: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateTo = (routeName: string) => (): void => {
    return navigate(routeName);
  };
  return (
    <>
      <View>
        <Text>Welcome</Text>
      </View>
      <View>
        <Text>To The App</Text>
      </View>
      <View>
        <Text>Somehow</Text>
        <Button title="Go Home" onPress={navigateTo(HOME)} />
        <Button title="Log Out" onPress={navigateTo(AUTH)} />
      </View>
    </>
  );
};

export default Details;
