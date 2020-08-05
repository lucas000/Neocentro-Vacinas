import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import {RadioButton} from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  height: 56px;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 40px;
`;

export const BackButton = styled.TouchableOpacity``;

export const IconArrowBack = styled(FeatherIcon)``;

export const SelectLocal = styled.Text`
  font-size: 20px;
  margin-left: 80px;
  font-family: 'Roboto-Medium';
  color: #000;
`;

export const ContainerInputsDataCard = styled.View`
  align-items: center;
  margin-top: 20px;
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

export const ButtonContinue = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #008789;
  margin-left: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TextButtonContinue = styled.Text`
  font-size: 18px;
  color: #f7f7f7;
  font-family: 'Roboto-Regular';
`;

export const ContainerLocal = styled.View`
  margin-top: 20px;
  margin-left: 10px;
`;

export const ContainerClinicOption = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
`;

export const RadioClinic = styled(RadioButton)`
  border-color: #008789;
`;

export const TextAcceptTerms = styled.Text`
  font-size: 16px;
`;

export const PickerDate = styled.Picker`
  height: 60px;
  margin: 10px;
  margin-left: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

export const InputAdress = styled.TextInput`
  font-size: 16px;
  margin: 10px;
  width: 95%;
  border-radius: 5px;
  background-color: #f7f7f7;
`;

export const TextTermsLink = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: #008789;
`;
