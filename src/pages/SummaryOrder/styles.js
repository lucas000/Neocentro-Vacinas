import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`

`;

export const IconArrowBack = styled(FeatherIcon)`
`;

export const SelectDate = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  margin-left: 70px;
`;

export const AvatarContainer = styled.View`
  margin-left: auto;
  margin-right: 28px;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  margin-left: 80px;
  border-radius: 22px;
`;

export const DateAppointmentContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextDateAppointment = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  color: #1abc9c;
`;

export const TextAppointmentIn = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #1abc9c;
  align-self: flex-end;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TextTimeAppointment = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  color: #1abc9c;
`;

export const TextVaccinesLabel = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  color: #1abc9c;
  margin-right: auto;
  margin-left: 30px;
`;

export const LineDivisor = styled.View`
  width: 100%;
  border-bottom-color: #1abc9c;
  border-bottom-width: 2px;
`;

export const ContainerItemsOrder = styled.View`
  width: 100%;
  height: 55%;
`;

export const ContainerListVaccines = styled.ScrollView`
  margin-top: 8px;
  margin-left: 14px;
`;

export const TotalOrderAndTotal = styled.View`
  flex-direction: column;
  align-self: flex-start;
  padding: 10px;
  margin-left: 10px;
`;

export const TotalOrder = styled.View`
  flex-direction: row;
`;

export const TotalOrderText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: #1abc9c;
`;

export const TotalOrderPrice = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  font-family: 'Roboto-Medium';
  color: #1abc9c;
`;

export const Total = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const TotalText = styled.Text`
  color: #008789;
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const TotalPrice = styled.Text`
  color: #008789;
  font-size: 16px;
  margin-left: 5px;
  font-family: 'Roboto-Medium';
`;

export const OptionsSubdivision = styled.Text`
  font-family: 'Roboto-Medium';
  color: #1abc9c;
  font-size: 12px;
`;

export const ContainerOptionsButtons = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ButtonBack = styled(RectButton)`
  height: 48px;
  background: #f7f7f7;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px 5px 10px 10px;
`;

export const TextButtonBack = styled.Text`
  font-size: 20px;
  color: #1abc9c;
  font-family: 'Roboto-Regular';
`;

export const ButtonContinue = styled(RectButton)`
  height: 48px;
  background: #1abc9c;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px 10px 10px 5px;
`;

export const TextButtonContinue = styled.Text`
  font-size: 20px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;
