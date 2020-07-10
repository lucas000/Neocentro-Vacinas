import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import SearchCity from './pages/SearchCity';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#3498db',
          },
        }}>
        <AppStack.Screen name={'Main'} component={Main} />
        <AppStack.Screen name={'SearchCity'} component={SearchCity} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
