import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import SelectAge from './pages/SelectAge';
import Vaccines from './pages/Vaccines';
import SelectDateAppointment from './pages/SelectDateAppointment';
import SummaryOrder from './pages/SummaryOrder';
import PaymentWay from './pages/PaymentWay';
import Login from './pages/Login';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        translucent
        screenOptions={{
          cardStyle: {
            backgroundColor: '#3498db',
          },
        }}>
        <AppStack.Screen name={'Main'} component={Main} />
        <AppStack.Screen name={'SelectAge'} component={SelectAge} />
        <AppStack.Screen name={'Vaccines'} component={Vaccines} />
        <AppStack.Screen name={'SelectDateAppointment'} component={SelectDateAppointment} />
        <AppStack.Screen name={'SummaryOrder'} component={SummaryOrder} />
        <AppStack.Screen name={'PaymentWay'} component={PaymentWay} />
        <AppStack.Screen name={'Login'} component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
