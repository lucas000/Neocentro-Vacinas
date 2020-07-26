import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 10px 10px 5px 10px;
  padding: 20px;
`;

export const DateAppointment = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #008789;
`;

export const InTime = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 5px;
  margin-right: 5px;
  color: #008789;
`;

export const Time = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #008789;
`;

export const ButtonInfo = styled.TouchableOpacity`
  margin-left: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const IconInfo = styled(FeatherIcon)`
  margin-left: 20px;
`;
