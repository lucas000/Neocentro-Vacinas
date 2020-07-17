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
  margin-left: 125px;
  color: #000;
`;

export const ContainerInputsDataCard = styled.View`
  align-items: center;
  margin-top: 120px;
`;

export const ContainerNameAndNumber = styled.View`
  width: 90%;
`;

export const InputNameVaccine = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  background-color: #f7f7f7;
  margin: 10px 10px 5px 10px;
  border-radius: 5px;
  padding-left: 10px;
`;

export const InputNumberVaccine = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  background-color: #f7f7f7;
  margin: 5px 10px 10px 10px;
  border-radius: 5px;
  padding-left: 10px;
`;

export const ButtonLogin = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #1abc9c;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
`;

export const TextButtonLogin = styled.Text`
  font-size: 20px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;

export const ButtonLoginSocial = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #3b5998;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  margin-top: 150px;
`;

export const TextButtonLoginSocial = styled.Text`
  font-size: 20px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;

export const RecoveryPassword = styled.Text`
  font-size: 20px;
  color: #1abc9c;
  font-family: 'Roboto-Regular';
`;

export const ButtonNewAccount = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #1abc9c;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const TextButtonNewAccount = styled.Text`
  font-size: 20px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;