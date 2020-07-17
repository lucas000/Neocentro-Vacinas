import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const NameVaccine = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
`;

export const SubNameVaccina = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 5px;
  margin-right: 5px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
`;
