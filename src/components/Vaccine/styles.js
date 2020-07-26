import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #f7f7f7;
  align-items: center;
  border-radius: 5px;
  margin: 10px 10px 4px 10px;
  padding: 8px 8px 8px 5px;
`;

export const PropertiesVaccine = styled.View`
  margin-left: 15px;
  margin-top: 5px;
`;

export const NameVaccine = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #008789;
`;

export const SubNameVaccina = styled.Text`
  color: #008789;
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const ContainerPrice = styled.View`
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const Price = styled.Text`
  margin-right: 8px;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #008789;
`;

export const IconInfo = styled(FeatherIcon)`

`;

export const ContainerControllQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
`;

export const RemoveQuantity = styled.TouchableOpacity`

`;

export const IconLess = styled(FeatherIcon)`
  margin-right: 5px;
`;

export const Quantity = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
`;

export const AddQuantity = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const IconAdd = styled(FeatherIcon)`

`;
