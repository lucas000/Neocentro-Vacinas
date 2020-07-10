import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #008789;
`;

export const TextMain = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f7f7f7;
`;

export const ButtonSchedule = styled(RectButton)`
  width: 80%;
  height: 48px;
  background: #f7f7f7;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const TextButtonSchedule = styled.Text`
  font-size: 16px;
`;
