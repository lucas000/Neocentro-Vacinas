import React from 'react';
import {
  Container,
  TextMain,
  ButtonSchedule,
  TextButtonSchedule,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  function handleScheduleVaccine() {
    console.log('Tocou');
    navigation.navigate('SearchCity');
  }

  return (
    <Container>
      <TextMain>Você deseja realizar uma vacina?</TextMain>

      <ButtonSchedule onPress={handleScheduleVaccine}>
        <TextButtonSchedule>Agendar uma vacina</TextButtonSchedule>
      </ButtonSchedule>
    </Container>
  );
};

export default Main;
