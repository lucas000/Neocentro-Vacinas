import React, {useState} from 'react';

import {
  Container,
  ContainerLocal,
  RadioClinic,
  TextAcceptTerms,
  ButtonContinue,
  ContainerClinicOption,
  TextButtonContinue,
  PickerDate,
  InputAdress,
} from './styles';

import {Picker, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderPage from '../../components/HeaderPage';

const ClinicUnit = () => {
  const [valueAdress, onChangeAdress] = useState('');
  const [checked, setChecked] = useState('first');
  const [selectedValue, setSelectedValue] = useState('Selecionar data');

  const navigation = useNavigation();

  function handleSelectDate() {
    Alert.alert(
      'Data de agendamento',
      'Para agendamentos em casa será agendado em no mínimo 48 horas antes\n\nPara agendamentos na clínca 24 horas antes.',
    );
    navigation.navigate('SelectDateAppointment');
  }

  return (
    <Container>
      <HeaderPage title={'Selecionar local'} />

      <ContainerLocal>
        <ContainerClinicOption>
          <RadioClinic
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <TextAcceptTerms>Vacinar em casa?</TextAcceptTerms>
        </ContainerClinicOption>

        <ContainerClinicOption>
          <InputAdress
            onChangeText={(text) => onChangeAdress(text)}
            value={valueAdress}
            placeholder="Endereço para vacinação"
            placeholderTextColor="#000000"
          />
        </ContainerClinicOption>

        <ContainerClinicOption style={{marginTop: 20}}>
          <RadioClinic
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <TextAcceptTerms>Vacinar em uma das nossas unidades?</TextAcceptTerms>
        </ContainerClinicOption>
      </ContainerLocal>

      <PickerDate
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Águas Claras" value="aguasclaras" />
        <Picker.Item label="Terraço Shopping" value="terraco" />
      </PickerDate>

      <ButtonContinue onPress={handleSelectDate}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default ClinicUnit;
