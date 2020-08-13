import React from 'react';
import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  SelectDate,
  AvatarContainer,
  Avatar,
  DateAppointmentContainer,
  TextDateAppointment,
  TextAppointmentIn,
  TextTimeAppointment,
  TextVaccinesLabel,
  LineDivisor,
  ContainerListVaccines,
  ContainerItemsOrder,
  TotalOrderAndTotal,
  TotalOrder,
  TotalOrderText,
  TotalOrderPrice,
  TotalText,
  TotalPrice,
  Total,
  OptionsSubdivision,
  ContainerOptionsButtons,
  ButtonBack,
  TextButtonBack,
  ButtonContinue,
} from './styles';

import ItemOrder from '../../components/ItemOrder';

import {useNavigation} from '@react-navigation/native';

import profile from '../../assets/profile.jpg';

const SummaryOrder = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleContinue() {
    navigation.navigate('PaymentWay');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <SelectDate>Dados do pedido</SelectDate>

        <AvatarContainer>
          <Avatar source={profile} />
        </AvatarContainer>
      </Header>

      <DateAppointmentContainer>
        <TextDateAppointment>27/07/2020</TextDateAppointment>
        <TextAppointmentIn>às</TextAppointmentIn>
        <TextTimeAppointment>15:00</TextTimeAppointment>
      </DateAppointmentContainer>

      <LineDivisor />
      <TextVaccinesLabel>Vacinas</TextVaccinesLabel>
      <LineDivisor />

      <ContainerItemsOrder>
        <ContainerListVaccines>
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
          <ItemOrder />
        </ContainerListVaccines>
      </ContainerItemsOrder>

      <LineDivisor />

      <TotalOrderAndTotal>
        <TotalOrder>
          <TotalOrderText>Total do pedido:</TotalOrderText>
          <TotalOrderPrice>R$ 144,40</TotalOrderPrice>
        </TotalOrder>

        <Total>
          <TotalText>Total:</TotalText>
          <TotalPrice>R$ 144,40 à vista</TotalPrice>
        </Total>
      </TotalOrderAndTotal>

      <OptionsSubdivision>Ver opções de parcelamento</OptionsSubdivision>

      <ContainerOptionsButtons>
        <ButtonBack onPress={handleGoBack}>
          <TextButtonBack>Voltar</TextButtonBack>
        </ButtonBack>

        <ButtonContinue onPress={handleContinue}>
          <TextButtonContinue>Continuar</TextButtonContinue>
        </ButtonContinue>
      </ContainerOptionsButtons>
    </Container>
  );
};

export default SummaryOrder;
