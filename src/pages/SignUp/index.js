import React, {useState} from 'react';

import {
  Container,
  Header,
  BackButton,
  IconArrowBack,
  SignUpText,
  ButtonContinue,
  TextButtonContinue,
  ContainerInputsDataCard,
  ContainerNameAndNumber,
  InputPhoneNumber,
  InputDDD,
  InputName,
  InputSurname,
  InputEmail,
  InputDateBorn,
  InputNameMother,
  ContainerDateExpirationAndCVV,
  CPF,
  ConfirmPassword,
  ContainerUseTerms,
  CheckboxTerms,
  TextAcceptTerms,
  TextTermsLink,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const SignUp = () => {

  const [valueName, onChangeName] = useState('');
  const [valueSurname, onChangeSurname] = useState('');
  const [valueEmail, onChangeEmail] = useState('');
  const [valueDateBorn, onChangeDateBorn] = useState('');
  const [valueDateExpiration, onChangeDateExpiration] = useState('');
  const [valueNameMother, onChangeNameMother] = useState('');
  const [valueDDD, onChangeDDD] = useState('');
  const [valuePhoneNumber, onChangePhoneNumber] = useState('');
  const [valuePassword, onChangePassword] = useState('');
  const [valueConfirmPassword, onChangeConfirmPassword] = useState('');

  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <IconArrowBack size={24} name="arrow-left" style={{color: '#000'}} />
        </BackButton>

        <SignUpText>Novo cadastro</SignUpText>
      </Header>

      <ContainerInputsDataCard>
        <ContainerNameAndNumber>
          <InputName
            onChangeText={text => onChangeName(text)}
            value={valueName}
            placeholder="Nome"
            placeholderTextColor="#000000"
          />

          <InputSurname 
            onChangeText={text => onChangeSurname(text)}
            value={valueSurname}
            placeholder="Sobrenome"
            placeholderTextColor="#000000"
          />

          <InputEmail
            onChangeText={text => onChangeEmail(text)}
            value={valueEmail}
            placeholder="Seu e-mail"
            placeholderTextColor="#000000"
          />

          <InputDateBorn
            onChangeText={text => onChangeDateBorn(text)}
            value={valueDateBorn}
            placeholder="Data de nascimento"
            placeholderTextColor="#000000"
          />

          <InputNameMother
            onChangeText={text => onChangeNameMother(text)}
            value={valueNameMother}
            placeholder="Nome da mãe"
            placeholderTextColor="#000000"
          />
        </ContainerNameAndNumber>

        <ContainerDateExpirationAndCVV>
          <InputDDD 
            onChangeText={text => onChangeDDD(text)}
            value={valueDDD}
            placeholder="DDD"
            placeholderTextColor="#000000"
          />

          <InputPhoneNumber
            onChangeText={text => onChangePhoneNumber(text)}
            value={valuePhoneNumber}
            placeholder="Número do telefone"
            placeholderTextColor="#000000"
          />
        </ContainerDateExpirationAndCVV>

        <CPF 
          onChangeText={text => onChangePassword(text)}
          value={valuePassword}
          placeholder="Digite uma senha"
          placeholderTextColor="#000000"
        />

        <ConfirmPassword
          onChangeText={text => onChangeConfirmPassword(text)}
          value={valueConfirmPassword}
          placeholder="Confirme sua senha"
          placeholderTextColor="#000000"
        />

        <ContainerUseTerms>
          <CheckboxTerms
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <TextAcceptTerms>Aceitar os</TextAcceptTerms>
          <TextTermsLink>termos de uso</TextTermsLink>
        </ContainerUseTerms>
      </ContainerInputsDataCard>

      <ButtonContinue onPress={handleSignUp}>
        <TextButtonContinue>Criar conta</TextButtonContinue>
      </ButtonContinue>
    </Container>
  );
};

export default SignUp;