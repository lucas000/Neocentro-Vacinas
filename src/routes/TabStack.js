import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

import Main from '../pages/Main';
import SelectAge from '../pages/SelectAge';
import AccountLogged from '../pages/AccountLogged';
import Appointments from '../pages/Appointments';
import SelectVaccine from '../pages/Vaccines';

const {Navigator, Screen} = createBottomTabNavigator();

function TabStack() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevatipn: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 30,
          height: 30,
        },
        labelStyle: {
          fontSize: 12,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#008789',
      }}>
      <Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Início',
          tabBarVisible: true,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <IconFontAwesome
                name="home"
                size={size}
                color={focused ? '#008789' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="SelectAge"
        component={SelectAge}
        options={{
          tabBarLabel: 'Vacinas',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <IconFontAwesome
                name="syringe"
                size={size}
                color={focused ? '#008789' : color}
              />
            );
          },
        }}
      />

      <Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: 'Agendamento',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <IconFontAwesome
                name="calendar"
                size={size}
                color={focused ? '#008789' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="AccountLogged"
        component={AccountLogged}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <IconFontAwesome
                name="user"
                size={size}
                color={focused ? '#008789' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default TabStack;
