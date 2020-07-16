import React, { useState } from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  SelectVaccineText,
  ButtonContinue,
  TextButtonContinue,
  SearchVaccineContainer,
  InputNameVaccine,
  SearchButton,
  IconSearch,
  ContainerListVaccines
  } from './styles';

import {useNavigation} from '@react-navigation/native';
import Vaccine from '../../components/Vaccine';

const Vaccines = () => {
  const navigation = useNavigation();
  const [value, onChangeText] = useState('');

  function handleGoBack() {
    navigation.goBack();
  }

  function handleToSelectDateAppointment() {
    navigation.navigate('SelectDateAppointment');
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <SelectVaccineText>Selecionar vacinas</SelectVaccineText>
      </Header>

      <SearchVaccineContainer>
        <InputNameVaccine 
           onChangeText={text => onChangeText(text)}
           value={value}
           placeholder="Busque uma vacina"
           placeholderTextColor="#000000"
        />

        <SearchButton onPress={() => {}}>
          <IconSearch size={24} name="search" style={{color: '#b3b3b3'}} />
        </SearchButton>
      </SearchVaccineContainer>

      <ContainerListVaccines>
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
        <Vaccine />
      </ContainerListVaccines>
      <ButtonContinue onPress={handleToSelectDateAppointment}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default Vaccines;
