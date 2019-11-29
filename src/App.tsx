import React from 'react';
import Router from './router';
import { enableScreens } from 'react-native-screens';

const App: React.FC = () => {
  enableScreens();

  return (
    <>
      <Router />
    </>
  );
};
export default App;
