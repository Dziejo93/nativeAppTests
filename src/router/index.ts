import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoginScreen from '../views/AuthLoadingScreen';
import AppStack from '../router/app';
import AuthStack from '../router/auth';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoginScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
