import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import { enableScreens } from 'react-native-screens';

const App: React.FC = () => {
  enableScreens();

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;
