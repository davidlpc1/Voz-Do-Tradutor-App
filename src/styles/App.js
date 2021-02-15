import styled from "styled-components/native";
import { Picker } from '@react-native-picker/picker';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  background-color: #ecf0f1;

  padding: 12px;
`;

export const Header = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  padding-top:20px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(120, 110, 95, 0.6);
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: Poppins_500Medium;
  font-weight: 500;
`;

export const TextToSpeechInput = styled.TextInput`
  background-color: #e7e4d5;

  height: 40px;
  padding: 10px;

  border: 0;
  border-radius: 15px;

  elevation: 10;

  font-size: 14px;
`;

export const LanguagePicker = styled(Picker)`
  height: 60px;
  width: 100%; 
`;

export const AlertText = styled.Text`
  color:red;
  text-align:center;
  font-size: 14px;

  margin: 5px;
`;

export const SpeakButton = styled.TouchableOpacity`
  margin: 32px auto 0;
  padding: 15px 40px;

  background-color: #27ae61;

  border-radius: 55px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SpeakButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: Poppins_600SemiBold;

  margin-left: 17px;
`;

export const Footer = styled.View`
  background-color: #dad6c2;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: 12px;
  font-family: Poppins_300Light;
  font-weight: 300;
`;
