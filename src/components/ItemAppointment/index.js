import React from 'react';

import {
  Container,
  DateAppointment,
  InTime,
  Time,
  ButtonCancel,
  IconCancel,
  ButtonInfo,
  IconInfo,
} from './styles';
import {Alert} from 'react-native';

const ItemAppointment = (props) => {
  return (
    <Container>
      <DateAppointment>22/07/2020</DateAppointment>
      <InTime>às</InTime>
      <Time>15:00</Time>

      <ButtonCancel
        onPress={() =>
          Alert.alert(
            'Para cancelar',
            'Para realizar o cancelamento do agendamento entre em contato no número: (61) 3361-0012',
          )
        }>
        <IconCancel size={24} name="x" style={{color: '#ff3333'}} />
      </ButtonCancel>

      <ButtonInfo onPress={() => props.onPress()}>
        <IconInfo size={24} name="info" style={{color: '#008789'}} />
      </ButtonInfo>
    </Container>
  );
};

export default ItemAppointment;
