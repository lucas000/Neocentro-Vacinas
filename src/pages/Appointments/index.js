import React from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  MyAppointmentsText,
  AvatarContainer,
  Avatar,
  ContainerItemsAppointment,
  ContainerListAppointments,
} from './styles';

import profile from '../../assets/profile.jpg';
import ItemAppointment from '../../components/ItemAppointment';
import {useNavigation} from '@react-navigation/native';

const Appointments = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleInfoAppointment() {
    navigation.navigate('DetailsAppointment');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <MyAppointmentsText>Meus agendamentos</MyAppointmentsText>

        <AvatarContainer>
          <Avatar source={profile} />
        </AvatarContainer>
      </Header>

      <ContainerItemsAppointment>
        <ContainerListAppointments>
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
          <ItemAppointment onPress={handleInfoAppointment} />
        </ContainerListAppointments>
      </ContainerItemsAppointment>
    </Container>
  );
};

export default Appointments;
