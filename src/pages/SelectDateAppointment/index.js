import React, { useState } from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  SelectDate,
  AvatarContainer,
  Avatar,
  ContainerCalendar,
  ButtonContinue,
  TextButtonContinue,
  } from './styles';

  
import {useNavigation} from '@react-navigation/native';
import profile from '../../assets/profile.jpg';
import { Alert } from 'react-native';

const SelectDateAppointment = () => {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleToSelectDateAppointment() {
    Alert.alert('OI', 'Oi');
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
            <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <SelectDate>Selecionar data</SelectDate>

        <AvatarContainer>
          <Avatar source={profile} />
        </AvatarContainer>
      </Header>

      <ContainerCalendar />

      <ButtonContinue onPress={handleToSelectDateAppointment}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default SelectDateAppointment;
