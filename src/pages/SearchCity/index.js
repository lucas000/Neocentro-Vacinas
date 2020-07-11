import React from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  TitleHeader,
  ContainerTitleHeader,
  SubTitleHeader,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const SearchCity = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <ContainerTitleHeader>
          <TitleHeader>Agendar vacina</TitleHeader>
          <SubTitleHeader>Busque por uma vacina</SubTitleHeader>
        </ContainerTitleHeader>
      </Header>
    </Container>
  );
};

export default SearchCity;
