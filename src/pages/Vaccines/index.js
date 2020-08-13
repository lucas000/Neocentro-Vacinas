import React, {useState} from 'react';

import {
  Container,
  ButtonContinue,
  TextButtonContinue,
  SearchVaccineContainer,
  InputNameVaccine,
  SearchButton,
  IconSearch,
  ContainerListVaccines,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import Vaccine from '../../components/Vaccine';
import HeaderPage from '../../components/HeaderPage';

const Vaccines = () => {
  const navigation = useNavigation();
  const [value, onChangeText] = useState('');

  function handlePatientDetails() {
    navigation.navigate('Patient');
  }

  function handleVaccineInfoDetails() {
    navigation.navigate('VaccineInfo');
  }

  return (
    <Container>
      <HeaderPage title={'Selecionar vacinas'} />

      <SearchVaccineContainer>
        <InputNameVaccine
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Busque uma vacina"
          placeholderTextColor="#000000"
        />

        <SearchButton onPress={() => {}}>
          <IconSearch size={24} name="search" style={{color: '#b3b3b3'}} />
        </SearchButton>
      </SearchVaccineContainer>

      <ContainerListVaccines>
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
        <Vaccine onPress={handleVaccineInfoDetails} />
      </ContainerListVaccines>

      <ButtonContinue onPress={handlePatientDetails}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default Vaccines;
