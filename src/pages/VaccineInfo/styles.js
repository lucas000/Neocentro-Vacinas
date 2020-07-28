import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const IconArrowBack = styled(Feather)``;

export const VaccineDetailsText = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  margin-left: 113px;
`;

export const ContainerInfoVaccine = styled.View`
  margin-left: 7%;
  margin-right: 2%;
`;

export const TextIndication = styled.Text`
  font-size: 18px;
  margin-top: 15%;
  font-family: 'Roboto-Medium';
`;

export const Indication = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Light';
`;

export const TextDestinatedFor = styled.Text`
  font-size: 18px;
  margin-top: 4%;
  font-family: 'Roboto-Medium';
`;

export const Destination = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Light';
`;
