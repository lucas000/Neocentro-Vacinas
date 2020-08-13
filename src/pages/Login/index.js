import React, {useState} from 'react';

import {
  Container,
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
  TextButtonNewAccount,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import HeaderPage from '../../components/HeaderPage';

const Login = () => {
  const [valueEmail, onChangeEmail] = useState('');
  const [valuePassword, onChangePassword] = useState('');

  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Main');
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }
  return (
    <Container>
      <HeaderPage title={'Entrar'} />

      <ContainerInputsDataCard>
        <ContainerNameAndNumber>
          <InputNameVaccine
            onChangeText={(text) => onChangeEmail(text)}
            value={valueEmail}
            placeholder="Seu e-mail"
            placeholderTextColor="#000000"
          />

          <InputNumberVaccine
            onChangeText={(text) => onChangePassword(text)}
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

        <ButtonNewAccount onPress={handleSignUp}>
          <TextButtonNewAccount>Novo cadastro</TextButtonNewAccount>
        </ButtonNewAccount>
      </ContainerInputsDataCard>
    </Container>
  );
};

export default Login;
