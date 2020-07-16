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

export const ContainerCalendar = styled.View`
  background-color: #f7f7f7;
  width: 95%;
  height: 40%;
  margin: 50px 20px 20px 20px;
`;

export const ButtonContinue = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #1abc9c;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonContinue = styled.Text`
  font-size: 18px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;