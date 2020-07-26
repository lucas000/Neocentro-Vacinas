import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  height: 56px;
`;

export const BackButton = styled.TouchableOpacity``;

export const IconArrowBack = styled(FeatherIcon)`
  margin-left: 20px;
  font-size: 24px;
  color: #000;
`;

export const ContainerTitleHeader = styled.View`
  flex-direction: column;
  margin-left: 18px;
`;

export const TitleHeader = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const SubTitleHeader = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const GroupVaccines = styled.View`
  align-self: center;
  align-content: center;
  width: 80%;
  margin-top: 60px;
`;

export const ChooseTextCategory = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: 'Roboto-Medium';
`;

export const ButtonGroup = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  border-radius: 5px;
  background: #008789;
  margin-top: 25px;
`;

export const TextNameGroup = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Medium';
`;

export const TextAgeGroup = styled.Text`
  font-size: 20px;
  color: #fff;
  font-family: 'Roboto-Medium';
`;
