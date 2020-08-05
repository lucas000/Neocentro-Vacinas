import React, {useState} from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  MyAppointmentsText,
  ContainerInputsDataCard,
  ContainerNameAndNumber,
  InputNameVaccine,
  InputNumberVaccine,
  ButtonContinue,
  TextButtonContinue,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const ClinicUnit = () => {
  const [valueName, onChangeName] = useState('');
  const [valueNumber, onChangeNumber] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSelectDate() {
    navigation.navigate('SelectDateAppointment');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <MyAppointmentsText>Selecionar clínica</MyAppointmentsText>
      </Header>

      <ButtonContinue onPress={handleSelectDate}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default ClinicUnit;
