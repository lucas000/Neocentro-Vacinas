import React, {useState, useCallback} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  SelectDate,
  AvatarContainer,
  OpenDatePickerButton,
  OpenDatePickerText,
  Avatar,
  ContainerCalendar,
  ButtonContinue,
  TextButtonContinue,
  PickerDate,
} from './styles';

import {useNavigation} from '@react-navigation/native';

import profile from '../../assets/profile.jpg';
import {Picker} from 'react-native';

const SelectDateAppointment = () => {
  const [selectedValue, setSelectedValue] = useState('Selecionar data');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleToSelectDateAppointment() {
    navigation.navigate('SummaryOrder');
  }

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <SelectDate>Selecionar data</SelectDate>

        <AvatarContainer>
          <Avatar source={profile} />
        </AvatarContainer>
      </Header>

      <ContainerCalendar>
        <OpenDatePickerButton onPress={handleToggleDatePicker}>
          <OpenDatePickerText>Selecionar outra data</OpenDatePickerText>
        </OpenDatePickerButton>

        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="calendar"
            onChange={() => {}}
            textColor="#008789"
            value={new Date()}
          />
        )}
      </ContainerCalendar>

      <PickerDate
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="23/07/2020 - 08:00" value="08:00" />
        <Picker.Item label="23/07/2020 - 09:00" value="09:00" />
        <Picker.Item label="23/07/2020 - 10:00" value="10:00" />
        <Picker.Item label="23/07/2020 - 11:00" value="11:00" />
        <Picker.Item label="23/07/2020 - 12:00" value="12:00" />
        <Picker.Item label="23/07/2020 - 13:00" value="13:00" />
        <Picker.Item label="23/07/2020 - 14:00" value="14:00" />
        <Picker.Item label="23/07/2020 - 15:00" value="15:00" />
        <Picker.Item label="23/07/2020 - 16:00" value="16:00" />
        <Picker.Item label="23/07/2020 - 17:00" value="17:00" />
        <Picker.Item label="23/07/2020 - 18:00" value="19:00" />
      </PickerDate>

      <ButtonContinue onPress={handleToSelectDateAppointment}>
        <TextButtonContinue>Continuar</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default SelectDateAppointment;
