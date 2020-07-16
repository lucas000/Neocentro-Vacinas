import React from 'react';

import {
  Container,
  PropertiesVaccine, 
  NameVaccine,
  SubNameVaccina,
  ContainerPrice,
  Price,
  IconInfo,
  ContainerControllQuantity,
  RemoveQuantity,
  IconLess,
  Quantity,
  AddQuantity,
  IconAdd
} from './styles';

const Vaccine = () => {
  return (
    <Container>
      <PropertiesVaccine>
        <NameVaccine>Febre amarela</NameVaccine>
        <SubNameVaccina>Febre Amarela (Stamaril@)</SubNameVaccina>
          <ContainerPrice>
            <Price>R$ 144,00</Price>
            <IconInfo size={24} name="info" style={{color: '#008789'}} />
          </ContainerPrice>
      </PropertiesVaccine>
      <ContainerControllQuantity>
        <RemoveQuantity onPress={() => {}}>
          <IconLess size={24} name="minus" style={{color: '#008789'}} />
        </RemoveQuantity>
        <Quantity>2</Quantity>
        <AddQuantity onPress={() => {}}>
          <IconAdd size={24} name="plus" style={{color: '#008789'}} />
        </AddQuantity>
      </ContainerControllQuantity>
    </Container>
  );
};

export default Vaccine;
