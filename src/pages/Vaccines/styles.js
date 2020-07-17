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

export const SelectVaccineText = styled.Text`
  font-size: 20px;
  margin-left: 50px;
  color: #000;
`;

export const ButtonContinue = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #1abc9c;
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

export const SearchVaccineContainer = styled.View`
  width: 91%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  
  border-radius: 6px;
  justify-content: center;
  margin-left: 25px;
  background-color: #f7f7f7;
`;

export const InputNameVaccine = styled.TextInput`
  font-size: 16px;
  margin-right: auto;
  padding: 5px 5px 5px 15px;
`;

export const SearchButton = styled.TouchableOpacity`
`;
  
export const IconSearch = styled(FeatherIcon)`
  font-size: 24px;
  margin-right: 15px;
  align-self: flex-end;
`;

export const ContainerListVaccines = styled.ScrollView`
  margin-top: 8px;
  margin-bottom: 12px;
  margin-left: 14px;
`;