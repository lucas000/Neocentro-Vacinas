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

const Patient = () => {
  const [valueName, onChangeName] = useState('');
  const [valueNumber, onChangeNumber] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSelectClinic() {
    navigation.navigate('ClinicUnit');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <MyAppointmentsText>Paciente</MyAppointmentsText>
      </Header>

      <ContainerInputsDataCard>
        <ContainerNameAndNumber>
          <InputNameVaccine
            onChangeText={(text) => onChangeName(text)}
            value={valueName}
            placeholder="Quem irá tomar a vacina"
            placeholderTextColor="#000000"
          />

          <InputNumberVaccine
            onChangeText={(text) => onChangeNumber(text)}
            value={valueNumber}
            placeholder="Data de nascimento"
            placeholderTextColor="#000000"
          />
        </ContainerNameAndNumber>
      </ContainerInputsDataCard>

      <ButtonContinue onPress={handleSelectClinic}>
        <TextButtonContinue>Selecionar local</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default Patient;
