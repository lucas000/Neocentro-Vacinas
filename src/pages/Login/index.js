import React, { useState } from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  PaymentWayText,
  ContainerInputsDataCard,
  ContainerNameAndNumber,
  InputNameVaccine,
  InputNumberVaccine,
  ButtonLogin,
  TextButtonLogin,
  ButtonLoginSocial,
  RecoveryPassword,
  TextButtonLoginSocial,
  ButtonNewAccount,
  TextButtonNewAccount
} from './styles';

import {useNavigation} from '@react-navigation/native';

const Login = () => {

  const [valueEmail, onChangeEmail] = useState('');
  const [valuePassword, onChangePassword] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleLogin() {
    navigation.navigate('Main');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <PaymentWayText>Entrar</PaymentWayText>
      </Header>

      <ContainerInputsDataCard>
        <ContainerNameAndNumber>
          <InputNameVaccine 
            onChangeText={text => onChangeEmail(text)}
            value={valueEmail}
            placeholder="Seu e-mail"
            placeholderTextColor="#000000"
          />

          <InputNumberVaccine 
            onChangeText={text => onChangePassword(text)}
            value={valuePassword}
            placeholder="Sua senha"
            placeholderTextColor="#000000"
          />
        </ContainerNameAndNumber>

        <ButtonLogin onPress={handleLogin}>
          <TextButtonLogin>Entrar</TextButtonLogin>
        </ButtonLogin>

        <RecoveryPassword>Recuperar senha</RecoveryPassword>

        <ButtonLoginSocial onPress={handleLogin}>
          <TextButtonLoginSocial>Entrar com Facebook</TextButtonLoginSocial>
        </ButtonLoginSocial>

        <ButtonNewAccount onPress={handleLogin}>
          <TextButtonNewAccount>Novo cadastro</TextButtonNewAccount>
        </ButtonNewAccount>
      </ContainerInputsDataCard>
    </Container>
  );
};

export default Login;