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

export const PaymentWayText = styled.Text`
  font-size: 20px;
  margin-left: 58px;
  font-family: 'Roboto-Medium';
  color: #000;
`;

export const ButtonContinue = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #008789;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  margin-left: 40px;
  margin-top: 80px;
`;

export const TextButtonContinue = styled.Text`
  font-size: 20px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;

export const ContainerInputsDataCard = styled.View`
  align-items: center;
  margin-top: 80px;
`;

export const ContainerNameAndNumber = styled.View`
  width: 90%;
`;

export const InputNameVaccine = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  border-radius: 5px;
  background-color: #f7f7f7;
  margin: 10px 10px 5px 10px;
`;

export const InputNumberVaccine = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  border-radius: 5px;
  background-color: #f7f7f7;
  margin: 5px 10px 10px 10px;
`;

export const ContainerDateExpirationAndCVV = styled.View`
  flex-direction: row;
  width: 352px;
  border-radius: 5px;
  margin-left: 20px;
`;

export const InputDateExpiration = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  border-radius: 5px;
  background-color: #f7f7f7;
  padding-right: 10px;
`;

export const InputCVVCard = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  border-radius: 5px;
  background-color: #f7f7f7;
  padding-left: 10px;
`;

export const CPF = styled.TextInput`
  font-size: 16px;
  width: 328px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
  padding-left: 10px;
`;
