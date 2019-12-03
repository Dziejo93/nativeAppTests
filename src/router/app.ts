import { createStackNavigator } from 'react-navigation-stack';
import MainView from '../views/app/MainView';
import Details from '../views/app/Details';

export default createStackNavigator(
  {
    Home: {
      screen: MainView,
    },
    Details,
  },
  {
    headerMode: 'none',
  }
);
