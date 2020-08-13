import React, {useState} from 'react';

import {
  Container,
  ButtonContinue,
  TextButtonContinue,
  ContainerInputsDataCard,
  ContainerNameAndNumber,
  InputNameVaccine,
  InputNumberVaccine,
  ContainerDateExpirationAndCVV,
  InputDateExpiration,
  InputCVVCard,
  CPF,
  ContactNumber,
  Adress,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import HeaderPage from '../../components/HeaderPage';

const PaymentWay = () => {
  const [valueName, onChangeName] = useState('');
  const [valueNumber, onChangeNumber] = useState('');
  const [valueCVV, onChangeCVV] = useState('');
  const [valueDateExpiration, onChangeDateExpiration] = useState('');
  const [valueCPF, onChangeCPF] = useState('');
  const [valueContact, onChangeContat] = useState('');
  const [valueAdress, onChangeAdress] = useState('');

  const navigation = useNavigation();

  function handleContinue() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <HeaderPage title={'Forma de pagamento'} />

      <ContainerInputsDataCard>
        <ContainerNameAndNumber>
          <InputNameVaccine
            onChangeText={(text) => onChangeName(text)}
            value={valueName}
            placeholder="Nome do titular"
            placeholderTextColor="#000000"
          />

          <InputNumberVaccine
            onChangeText={(text) => onChangeNumber(text)}
            value={valueNumber}
            placeholder="Número do cartão"
            placeholderTextColor="#000000"
          />
        </ContainerNameAndNumber>

        <ContainerDateExpirationAndCVV>
          <InputDateExpiration
            onChangeText={(text) => onChangeDateExpiration(text)}
            value={valueDateExpiration}
            placeholder="Data de expiração"
            placeholderTextColor="#000000"
          />

          <InputCVVCard
            onChangeText={(text) => onChangeCVV(text)}
            value={valueCVV}
            placeholder="Número do cartão"
            placeholderTextColor="#000000"
          />
        </ContainerDateExpirationAndCVV>

        <CPF
          onChangeText={(text) => onChangeCPF(text)}
          value={valueCPF}
          placeholder="CPF para nota"
          placeholderTextColor="#000000"
        />

        <ContactNumber
          onChangeText={(text) => onChangeContat(text)}
          value={valueContact}
          placeholder="Contato titular do cartão"
          placeholderTextColor="#000000"
        />

        <Adress
          onChangeText={(text) => onChangeAdress(text)}
          value={valueAdress}
          placeholder="Endereço para nota"
          placeholderTextColor="#000000"
        />
      </ContainerInputsDataCard>

      <ButtonContinue onPress={handleContinue}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default PaymentWay;
