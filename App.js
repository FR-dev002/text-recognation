import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TextRecognationScreen from './src/Screens/TextRecognationScreen';
import BarcodeReaderScreen from './src/Screens/BarcodeReaderScreen';
import HomeScreen from './src/Screens/HomeScreen';

const rootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <rootStack.Navigator mode="modal" initialRouteName="Home">
        <rootStack.Screen name="Home" component={HomeScreen} />
        <rootStack.Screen
          name="TextRecognation"
          component={TextRecognationScreen}
        />
        <rootStack.Screen
          name="BarcodeReader"
          component={BarcodeReaderScreen}
        />
      </rootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
