import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './SignIn';
import Login from './LogIn';
import AuthLoginScreen from './AuthLoadingScreen';
import HelloWorld from '../../components/HelloWorld';
import Dupa from '../../components/Dupa';

const AppStack = createStackNavigator({ Home: HelloWorld, Other: Dupa });
const AuthStack = createStackNavigator({ SignIn, Login });

const AuthWrapper = createAppContainer(
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

export default AuthWrapper;
