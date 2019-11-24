import { createStackNavigator } from 'react-navigation-stack';
import MainView from '../views/app/MainView';
import Details from '../views/app/Details';

export default createStackNavigator({
  Home: {
    screen: MainView,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      title: 'Home',
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex: 1 },
    },
  },
  Details,
});
