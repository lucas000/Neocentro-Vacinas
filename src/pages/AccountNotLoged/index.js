import React from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  AccountText,
  ButtonLoginInAccount,
  ContainerLoginOption,
  IconUserAvatar,
  LoginText,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const AccountNotLoged = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoAccountLogged() {
    navigation.navigate('AccountLogged');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <AccountText>Conta</AccountText>
      </Header>

      <ContainerLoginOption>
        <ButtonLoginInAccount onPress={handleGoAccountLogged}>
          <IconUserAvatar size={24} name="user" style={{color: '#008789'}} />
          <LoginText>Login</LoginText>
        </ButtonLoginInAccount>
      </ContainerLoginOption>
    </Container>
  );
};

export default AccountNotLoged;
