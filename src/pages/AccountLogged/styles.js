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

export const ContainerAccountOptions = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 50px;
`;

export const ButtonLoginInAccount = styled(RectButton)`
  flex-direction: row;
  margin-top: 20px;
`;

export const IconPerfil = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const PerfilText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const ButtonVaccinescheduled = styled(RectButton)`
  flex-direction: row;
  margin-top: 20px;
`;

export const IconVaccinescheduled = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const VaccinescheduledText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const ButtonPaymentWay = styled(RectButton)`
  flex-direction: row;
  margin-top: 20px;
`;

export const IconButtonPaymentWay = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const PaymentWayText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;

export const ButtonLogout = styled(RectButton)`
  flex-direction: row;
  margin-top: 20px;
`;

export const IconLogout = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const LogoutText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Medium';
`;
