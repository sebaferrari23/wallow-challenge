/** @format */

import React from 'react';
import { StatusBar } from 'react-native';
import { StoreContext } from 'redux-react-hook';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from '~/store';
import { Home, Meditation } from '~/screens';

export const App = () => {
  const Stack = createNativeStackNavigator();
  const options = { gestureEnabled: false, headerShown: false };

  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={options} />
          <Stack.Screen name="Meditation" component={Meditation} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
};

export default App;
