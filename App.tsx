import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import HomeScreen from './components/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar
        //backgroundColor="white"
        barStyle="dark-content"
      />
      <HomeScreen />
    </>
  );
};

export default App;
