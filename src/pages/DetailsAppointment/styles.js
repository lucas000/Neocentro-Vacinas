import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const IconArrowBack = styled(Feather)``;

export const MyAppointmentsText = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  margin-left: 55px;
`;

export const AvatarContainer = styled.View`
  margin-left: auto;
  margin-right: 28px;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  margin-left: 80px;
  border-radius: 22px;
`;

export const ContainerItemsVaccines = styled.View`
  width: 100%;
  padding: 0 10px;
`;

export const ContainerListVaccines = styled.ScrollView`
  margin-top: 28px;
  margin-bottom: 12px;
`;
