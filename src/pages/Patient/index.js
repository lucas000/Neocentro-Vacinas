import React, {useState} from 'react';

import {
  Container,
  ContainerInputsDataCard,
  ContainerNameAndNumber,
  InputNameVaccine,
  InputNumberVaccine,
  ButtonContinue,
  TextButtonContinue,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import HeaderPage from '../../components/HeaderPage';

const Patient = () => {
  const [valueName, onChangeName] = useState('');
  const [valueNumber, onChangeNumber] = useState('');

  const navigation = useNavigation();

  function handleSelectClinic() {
    navigation.navigate('ClinicUnit');
  }

  return (
    <Container>
      <HeaderPage title={'Paciente'} />

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
