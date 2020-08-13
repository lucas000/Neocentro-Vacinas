import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabStack from '../routes/TabStack';

import Main from '../pages/Main';
import SelectAge from '../pages/SelectAge';
import Vaccines from '../pages/Vaccines';
import SelectDateAppointment from '../pages/SelectDateAppointment';
import SummaryOrder from '../pages/SummaryOrder';
import PaymentWay from '../pages/PaymentWay';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AccountNotLoged from '../pages/AccountNotLoged';
import AccountLogged from '../pages/AccountLogged';
import Appointments from '../pages/Appointments';
import DetailsAppointment from '../pages/DetailsAppointment';
import UpdateAccount from '../pages/UpdateAccount';
import VaccineInfo from '../pages/VaccineInfo';
import Patient from '../pages/Patient';
import ClinicUnit from '../pages/ClinicUnit';

const AppStack = createStackNavigator();

const Stack = () => {
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
        <AppStack.Screen name={'Tabs'} component={TabStack} />
        <AppStack.Screen name={'Vaccines'} component={Vaccines} />

        <AppStack.Screen
          name={'SelectDateAppointment'}
          component={SelectDateAppointment}
        />

        <AppStack.Screen name={'SummaryOrder'} component={SummaryOrder} />
        <AppStack.Screen name={'PaymentWay'} component={PaymentWay} />
        <AppStack.Screen name={'Login'} component={Login} />
        <AppStack.Screen name={'SignUp'} component={SignUp} />
        <AppStack.Screen name={'AccountNotLoged'} component={AccountNotLoged} />
        <AppStack.Screen
          name={'DetailsAppointment'}
          component={DetailsAppointment}
        />
        <AppStack.Screen name={'UpdateAccount'} component={UpdateAccount} />
        <AppStack.Screen name={'VaccineInfo'} component={VaccineInfo} />
        <AppStack.Screen name={'Patient'} component={Patient} />
        <AppStack.Screen name={'ClinicUnit'} component={ClinicUnit} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
