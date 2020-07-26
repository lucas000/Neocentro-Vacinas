import React from 'react';

import {
  Container,
  DateAppointment,
  InTime,
  Time,
  ButtonInfo,
  IconInfo,
} from './styles';

const ItemAppointment = (props) => {
  return (
    <Container>
      <DateAppointment>22/07/2020</DateAppointment>
      <InTime>às</InTime>
      <Time>15:00</Time>

      <ButtonInfo onPress={() => props.onPress()}>
        <IconInfo size={24} name="info" style={{color: '#008789'}} />
      </ButtonInfo>
    </Container>
  );
};

export default ItemAppointment;
