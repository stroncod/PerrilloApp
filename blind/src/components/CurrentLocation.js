import React from 'react';
import { Text } from 'react-native';
import Tts from 'react-native-tts';

const CurrentLocation = ({ currentPlace }) => {
  
  Tts.setDefaultLanguage('es-US');
  Tts.speak(currentPlace);
  return (   
      <Text> { currentPlace } </Text>
  );  
};

export default CurrentLocation;
