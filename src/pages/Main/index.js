import React, {useState} from 'react';
import {
  Container,
  TextMain,
  ButtonSchedule,
  WelcomeContainer,
  ContainerAvatar,
  UserAvatar,
  LogoCompany,
  CompanyName,
  TextButtonSchedule,
} from './styles';

import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const [user, setUser] = useState('Jim');

  const navigation = useNavigation();

  function handleScheduleVaccine() {
    navigation.navigate('SelectAge');
  }

  return (
    <Container>
      <WelcomeContainer>
        <TextMain>Bem vindo, {user}</TextMain>

        <ContainerAvatar>
          <UserAvatar source={profile} />
        </ContainerAvatar>
      </WelcomeContainer>

      <ButtonSchedule onPress={handleScheduleVaccine}>
        <TextButtonSchedule>Agendar uma vacina</TextButtonSchedule>
      </ButtonSchedule>

      <LogoCompany source={logo} />
      <CompanyName>Neocentro Vacinas</CompanyName>
    </Container>
  );
};

export default Main;
