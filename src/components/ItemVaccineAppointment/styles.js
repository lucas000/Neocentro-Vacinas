import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  margin-bottom: 10px;
`;

export const ContainerVaccine = styled.View`
`;

export const DateAppointment = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #008789;
`;

export const Quantity = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #008789;
`;

export const ButtonInfo = styled(RectButton)`
  margin-left: 100px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const IconInfo = styled(FeatherIcon)`
  margin-left: 20px;
`;
