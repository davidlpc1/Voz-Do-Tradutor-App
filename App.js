import React, { useState } from "react";
import * as Speech from "expo-speech";

import { useFonts, Poppins_300Light,Poppins_400Regular,Poppins_500Medium,Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { TouchableWithoutFeedback,Keyboard,Text } from 'react-native';

import {
  Container,
  Header,
  Title,
  TextToSpeechInput,
  LanguagePicker,
  AlertText,
  SpeakButton,
  SpeakButtonText,
  Footer,
  FooterText,
} from "./src/styles/App";

import SpeakSvg from "./src/components/SpeakSvg";

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const [ textToSpeak, setTextToSpeak ] = useState("Texto para falar");
  const [ showInputAlert,setShowInputAlert ] = useState(false)
  const [ languageSpeaked,setLanguageSpeaked ] = useState("pt-br")

  const availableLanguagesToSpeak = [
    { label:'Português (Brasil)',value:'pt-br' },
    { label:'Inglês (EUA)',value:'en-us' }
  ]

  const speak = () => {
    setShowInputAlert(textToSpeak.trim().length === 0)
    Speech.speak(textToSpeak, { language: languageSpeaked, rate: 0.9 });
    Keyboard.dismiss()
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Texto para voz</Title>
        </Header>

        <TextToSpeechInput
          onChangeText={(text) => setTextToSpeak(text)}
          value={textToSpeak}
        />

        <LanguagePicker
          selectedValue={languageSpeaked}
          onValueChange={languageSelected => setLanguageSpeaked(languageSelected)}
        >

          {availableLanguagesToSpeak.map(({ label, value }) => (
            <LanguagePicker.Item label={label} value={value} key={`${label}--${value}`} />
          ))}

        </LanguagePicker>

        {showInputAlert && (
          <AlertText>Por favor,coloque um texto para ser falado</AlertText>
        )}

        <SpeakButton onPress={speak}>
          <SpeakSvg />

          <SpeakButtonText>Falar</SpeakButtonText>
        </SpeakButton>

        <Footer>
          <FooterText>Feito por Davi Lucas{"(@davidlpc1)"}</FooterText>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}