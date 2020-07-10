import React from 'react';

import {
  Container,
  Header,
  IconArrowBack,
  TitleHeader,
  ContainerTitleHeader,
  SubTitleHeader,
} from './styles';

const SearchCity = () => {
  return (
    <Container>
      <Header>
        <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />

        <ContainerTitleHeader>
          <TitleHeader>Agendar vacina</TitleHeader>
          <SubTitleHeader>Busque por uma vacina</SubTitleHeader>
        </ContainerTitleHeader>
      </Header>
    </Container>
  );
};

export default SearchCity;
