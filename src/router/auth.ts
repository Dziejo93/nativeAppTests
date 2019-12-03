import { createStackNavigator } from 'react-navigation-stack';
import Auth from './../views/auth/Auth';
import Login from './../views/auth/LogIn';
import SignIn from './../views/auth/SignIn';

export default createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      title: 'Authorize',
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex: 1 },
    },
  },
  Login,
  SignIn,
});
