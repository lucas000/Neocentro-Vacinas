import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #008789;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #f7f7f7;
  height: 56px;
`;

export const BackButton = styled(RectButton)``;

export const IconArrowBack = styled(FeatherIcon)`
  margin-left: 20px;
  font-size: 24px;
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
  font-size: 12px;
  margin-top: 5px;
  color: #000;
`;
