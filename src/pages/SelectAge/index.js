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
  const [user, setUser] = useState('Lucas');

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
      </Header>

      <GroupVaccines>
        <ChooseTextCategory>Escolha uma categoria, {user}.</ChooseTextCategory>

        <ButtonGroup onPress={() => {}}>
          <TextNameGroup>Infantil</TextNameGroup>
          <TextAgeGroup>0 a 10 anos</TextAgeGroup>
        </ButtonGroup>

        <ButtonGroup onPress={() => {}}>
          <TextNameGroup>Adolescente</TextNameGroup>
          <TextAgeGroup>10 a 19 anos</TextAgeGroup>
        </ButtonGroup>

        <ButtonGroup onPress={() => {}}>
          <TextNameGroup>Adulto</TextNameGroup>
          <TextAgeGroup>19 a 29 anos</TextAgeGroup>
        </ButtonGroup>

        <ButtonGroup onPress={() => {}}>
          <TextNameGroup>Idoso</TextNameGroup>
          <TextAgeGroup>mais de 60 anos</TextAgeGroup>
        </ButtonGroup>
      </GroupVaccines>
    </Container>
  );
};

export default SelectAge;
