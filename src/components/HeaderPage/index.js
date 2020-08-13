import React from 'react';

import {Container, BackButton, IconArrowBack, Title} from './styles';

import {useNavigation} from '@react-navigation/native';

const HeaderPage = (props) => {
  const {title} = props;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
};

export default HeaderPage;
