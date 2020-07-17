import React from 'react';

import {
  Container,
  NameVaccine,
  SubNameVaccina,
  Price
} from './styles';

const ItemOrder = () => {
  return (
    <Container>
      <NameVaccine>Febre amarela</NameVaccine>
      <SubNameVaccina>2x</SubNameVaccina>
      <Price>R$ 144,00</Price>
    </Container>
  );
};

export default ItemOrder;
