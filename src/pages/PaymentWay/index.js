import React, { useState } from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  PaymentWayText,
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
} from './styles';


import {useNavigation} from '@react-navigation/native';

const PaymentWay = () => {
  const [valueName, onChangeName] = useState('');
  const [valueNumber, onChangeNumber] = useState('');
  const [valueCVV, onChangeCVV] = useState('');
  const [valueDateExpiration, onChangeDateExpiration] = useState('');
  const [valueCPF, onChangeCPF] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleContinue() {
    navigation.navigate('PaymentWay');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <PaymentWayText>Forma de pagamento</PaymentWayText>
      </Header>

      <ContainerInputsDataCard>
        <ContainerNameAndNumber>
          <InputNameVaccine 
            onChangeText={text => onChangeName(text)}
            value={valueName}
            placeholder="Nome do titular"
            placeholderTextColor="#000000"
          />

          <InputNumberVaccine 
            onChangeText={text => onChangeNumber(text)}
            value={valueNumber}
            placeholder="Número do cartão"
            placeholderTextColor="#000000"
          />
        </ContainerNameAndNumber>

        <ContainerDateExpirationAndCVV>
          <InputDateExpiration 
            onChangeText={text => onChangeDateExpiration(text)}
            value={valueDateExpiration}
            placeholder="Data de expiração"
            placeholderTextColor="#000000"
          />

          <InputCVVCard 
            onChangeText={text => onChangeCVV(text)}
            value={valueCVV}
            placeholder="Número do cartão"
            placeholderTextColor="#000000"
          />
        </ContainerDateExpirationAndCVV>

        <CPF 
          onChangeText={text => onChangeCPF(text)}
          value={valueCPF}
          placeholder="CPF para nota"
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