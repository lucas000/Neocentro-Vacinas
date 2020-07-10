import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #008789;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
`;

export const IconArrowBack = styled(FeatherIcon)`
  margin-left: 20px;
  font-size: 20px;
  color: #000;
  margin-top: 15px;
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
  font-size: 14px;
  color: #000;
`;
