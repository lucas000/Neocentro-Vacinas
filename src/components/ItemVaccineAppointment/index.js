import React from 'react';

import {
  Container,
  ContainerVaccine,
  DateAppointment,
  Quantity,
  ButtonInfo,
  IconInfo,
} from './styles';

const ItemVaccineAppointment = (props) => {
  return (
    <Container>
      <ContainerVaccine>
        <DateAppointment>Febre amarela</DateAppointment>
        <Quantity>2x</Quantity>
      </ContainerVaccine>

      <ButtonInfo onPress={() => props.onPress()}>
        <IconInfo size={24} name="info" style={{color: '#008789'}} />
      </ButtonInfo>
    </Container>
  );
};

export default ItemVaccineAppointment;
