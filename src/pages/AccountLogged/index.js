import React from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  AccountText,
  ButtonLoginInAccount,
  ContainerAccountOptions,
  IconPerfil,
  PerfilText,
  ButtonVaccinescheduled,
  IconVaccinescheduled,
  VaccinescheduledText,
  ButtonPaymentWay,
  IconButtonPaymentWay,
  PaymentWayText,
  ButtonLogout,
  IconLogout,
  LogoutText
} from './styles';

import {useNavigation} from '@react-navigation/native';

const AccountLogged = () => {

  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handlePaymentWay() {
    navigation.navigate('PaymentWay');
  }

  function handleLogout() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <AccountText>Conta</AccountText>
      </Header>

      <ContainerAccountOptions>
        <ButtonLoginInAccount onPress={() => {}}>
          <IconPerfil size={24} name="user" style={{color: '#008789'}} />
          <PerfilText>Perfil</PerfilText>
        </ButtonLoginInAccount>

        <ButtonVaccinescheduled onPress={() => {}}>
          <IconVaccinescheduled size={24} name="calendar" style={{color: '#008789'}} />
          <VaccinescheduledText>Vacinas agendadas</VaccinescheduledText>
        </ButtonVaccinescheduled>

        <ButtonPaymentWay onPress={() => {}}>
          <IconButtonPaymentWay size={24} name="credit-card" style={{color: '#008789'}} />
          <PaymentWayText>Forma de pagamento</PaymentWayText>
        </ButtonPaymentWay>

        <ButtonLogout onPress={() => {}}>
          <IconLogout size={24} name="log-out" style={{color: '#008789'}} />
          <LogoutText>Sair</LogoutText>
        </ButtonLogout>
      </ContainerAccountOptions>
    </Container>
  );
};

export default AccountLogged;