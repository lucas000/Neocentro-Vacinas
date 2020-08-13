import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 10px 10px 10px 3px;
`;

export const BackButton = styled.TouchableOpacity``;

export const IconArrowBack = styled(FeatherIcon)`
  font-size: 24px;
  color: #000;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: 5%;
  font-family: 'Roboto-Medium';
  color: #000;
`;
