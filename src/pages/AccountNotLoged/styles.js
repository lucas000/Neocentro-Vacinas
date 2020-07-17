import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  height: 56px;
  margin-top: 20px;
  margin-right: 40px;
`;

export const BackButton = styled.TouchableOpacity``;

export const IconArrowBack = styled(FeatherIcon)`
  margin-left: 20px;
  font-size: 24px;
  color: #000;
`;

export const AccountText = styled.Text`
  font-size: 20px;
  margin-left: 120px;
  color: #000;
`;

export const ContainerLoginOption = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-top: 50px;
`;

export const ButtonLoginInAccount = styled(RectButton)`
  flex-direction: row;
  padding: 10px;
`;

export const IconUserAvatar = styled(FeatherIcon)`
  font-size: 24px;
  color: #000;
  margin-right: 10px;
`;

export const LoginText = styled.Text`
  font-size: 20px;
  color: #008789;
`;
