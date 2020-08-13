import React, {useState} from 'react';

import {
  Container,
  TextMain,
  ButtonSchedule,
  WelcomeContainer,
  UserAvatar,
  LogoCompany,
  CompanyName,
  TextButtonSchedule,
  ButtonUserAvatar,
} from './styles';

import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const [user, setUser] = useState('Jim');

  const navigation = useNavigation();

  function handleAccountOptions() {
    navigation.navigate('AccountLogged');
  }
  function handleScheduleVaccine() {
    navigation.navigate('SelectAge');
  }

  return (
    <Container>
      <WelcomeContainer>
        <TextMain>Bem vindo, {user}</TextMain>

        <ButtonUserAvatar onPress={handleAccountOptions}>
          <UserAvatar source={profile} />
        </ButtonUserAvatar>
      </WelcomeContainer>

      <ButtonSchedule onPress={handleScheduleVaccine}>
        <TextButtonSchedule>Agendar sua vacina</TextButtonSchedule>
      </ButtonSchedule>

      <LogoCompany source={logo} />
      <CompanyName>Neocentro Vacinas</CompanyName>
    </Container>
  );
};

export default Main;
