import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const WelcomeContainer = styled.View`
  width: 100%;
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const TextMain = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  color: #000000;
  margin-left: 50px;
`;

export const ButtonUserAvatar = styled.TouchableOpacity`
  flex-direction: row;
`;

export const UserAvatar = styled.Image`
  width: 48px;
  height: 48px;
  margin-left: 100px;
  border-radius: 22px;
`;

export const ButtonSchedule = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #008789;
  margin-left: 40px;
  margin-top: 180px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonSchedule = styled.Text`
  font-size: 18px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;

export const LogoCompany = styled.Image`
  width: 200px;
  height: 200px;
  margin-left: 100px;
`;

export const CompanyName = styled.Text`
  font-size: 22px;
  margin-top: 30px;
  margin-left: 95px;
  color: #008789;
  font-family: 'Roboto-Regular';
`;
