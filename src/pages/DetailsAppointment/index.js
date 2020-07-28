import React from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  MyAppointmentsText,
  AvatarContainer,
  Avatar,
  ContainerItemsVaccines,
  ContainerListVaccines,
} from './styles';

import ItemVaccineAppointment from '../../components/ItemVaccineAppointment';
import {useNavigation} from '@react-navigation/native';
import profile from '../../assets/profile.jpg';

const DetailsAppointment = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleInfoVaccine() {
    navigation.navigate('VaccineInfo');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <MyAppointmentsText>Vacinas agendadas</MyAppointmentsText>

        <AvatarContainer>
          <Avatar source={profile} />
        </AvatarContainer>
      </Header>

      <ContainerItemsVaccines>
        <ContainerListVaccines>
          <ItemVaccineAppointment onPress={handleInfoVaccine} />
          <ItemVaccineAppointment onPress={handleInfoVaccine} />
        </ContainerListVaccines>
      </ContainerItemsVaccines>
    </Container>
  );
};

export default DetailsAppointment;
