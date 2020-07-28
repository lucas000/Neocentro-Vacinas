import React from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  VaccineDetailsText,
  ContainerInfoVaccine,
  TextIndication,
  Indication,
  TextDestinatedFor,
  Destination,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const VaccineInfo = () => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <VaccineDetailsText>Pentavalente</VaccineDetailsText>
      </Header>

      <ContainerInfoVaccine>
        <TextIndication>Indicação</TextIndication>
        <Indication>
          A vacina pentavalente é a combinação de cinco vacinas individuais em
          uma. O objetivo é proteger as pessoas contra múltiplas doenças ao
          mesmo tempo.
        </Indication>

        <TextDestinatedFor>O que proteje?</TextDestinatedFor>
        <Destination>
          A vacina pentavalente garante a proteção contra a difteria, tétano,
          coqueluche, hepatite B e contra a bactéria haemophilus influenza tipo
          b, responsável por infecções no nariz, meninge e na garganta.
        </Destination>

        <TextDestinatedFor>Quem deve tomar?</TextDestinatedFor>
        <Destination>
          A vacina pentavalente é aplicada nas crianças aos 2, 4 e 6 meses de
          idade. Os reforços e/ou complementações em crianças a partir de 1 ano
          são realizados com a vacina adsorvida difteria, tétano e pertússis
          (DTP).
        </Destination>

        <TextDestinatedFor>Reações</TextDestinatedFor>
        <Destination>
          A vacina pentavalente pode provocar algumas reações, geralmente entre
          as primeiras 48 a 72 horas após a aplicação. Na maioria das vezes são
          reações leves, que passam rápido e não deixam sequelas.
        </Destination>

        <TextDestinatedFor>Quem não pode tomar?</TextDestinatedFor>
        <Destination>
          Após reações em dose anterior, como moleza e palidez nas primeiras 48
          horas, convulsões nas primeiras 72 horas, reações alérgicas nas
          primeiras duas horas e encefalopatia aguda nos primeiros sete dias
          após a vacinação.
        </Destination>
      </ContainerInfoVaccine>
    </Container>
  );
};

export default VaccineInfo;
