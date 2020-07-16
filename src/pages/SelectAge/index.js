import React, {useState} from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  GroupVaccines,
  ChooseTextCategory,
  ButtonGroup,
  TextNameGroup,
  TextAgeGroup,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const SelectAge = () => {
  const [user, setUser] = useState('Jim');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGroupChildish() {
    navigation.navigate('Vaccines');
  }

  function handleGroupTeenager() {
    navigation.navigate('Vaccines');
  }

  function handleGroupAdult() {
    navigation.navigate('Vaccines');
  }

  function handleGroupElderly() {
    navigation.navigate('Vaccines');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>
      </Header>

      <GroupVaccines>
        <ChooseTextCategory>Escolha uma categoria, {user}.</ChooseTextCategory>

        <ButtonGroup onPress={handleGroupChildish}>
          <TextNameGroup>Infantil</TextNameGroup>
          <TextAgeGroup>0 a 10 anos</TextAgeGroup>
        </ButtonGroup>

        <ButtonGroup onPress={handleGroupTeenager}>
          <TextNameGroup>Adolescente</TextNameGroup>
          <TextAgeGroup>10 a 19 anos</TextAgeGroup>
        </ButtonGroup>

        <ButtonGroup onPress={handleGroupAdult}>
          <TextNameGroup>Adulto</TextNameGroup>
          <TextAgeGroup>19 a 29 anos</TextAgeGroup>
        </ButtonGroup>

        <ButtonGroup onPress={handleGroupElderly}>
          <TextNameGroup>Idoso</TextNameGroup>
          <TextAgeGroup>mais de 60 anos</TextAgeGroup>
        </ButtonGroup>
      </GroupVaccines>
    </Container>
  );
};

export default SelectAge;
