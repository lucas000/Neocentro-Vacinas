import React from 'react';

import {
  Container,
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
  LogoutText,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import HeaderPage from '../../components/HeaderPage';

const AccountLogged = () => {
  const navigation = useNavigation();

  function handleGoVaccinesSchedule() {
    navigation.navigate('Appointments');
  }

  function handleClickProfile() {
    navigation.navigate('UpdateAccount');
  }

  function handlePaymentWay() {
    navigation.navigate('PaymentWay');
  }

  function handleLogout() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <HeaderPage title={'Conta'} />

      <ContainerAccountOptions>
        <ButtonLoginInAccount onPress={handleClickProfile}>
          <IconPerfil size={24} name="user" style={{color: '#008789'}} />
          <PerfilText>Perfil</PerfilText>
        </ButtonLoginInAccount>

        <ButtonVaccinescheduled onPress={handleGoVaccinesSchedule}>
          <IconVaccinescheduled
            size={24}
            name="calendar"
            style={{color: '#008789'}}
          />
          <VaccinescheduledText>Vacinas agendadas</VaccinescheduledText>
        </ButtonVaccinescheduled>

        <ButtonPaymentWay onPress={handlePaymentWay}>
          <IconButtonPaymentWay
            size={24}
            name="credit-card"
            style={{color: '#008789'}}
          />
          <PaymentWayText>Forma de pagamento</PaymentWayText>
        </ButtonPaymentWay>

        <ButtonLogout onPress={handleLogout}>
          <IconLogout size={24} name="log-out" style={{color: '#008789'}} />
          <LogoutText>Sair</LogoutText>
        </ButtonLogout>
      </ContainerAccountOptions>
    </Container>
  );
};

export default AccountLogged;
