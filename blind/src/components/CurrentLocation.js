import React from 'react';
import { 
	Text,
	StyleSheet 
} from 'react-native';
import Tts from 'react-native-tts';

const CurrentLocation = ({ currentPlace }) => {
	//Activo el text-to-speech a español
	//y que diga el lugar por voz
	// además lo muestro en pantalla, para lectura por talkback/voiceOver
  
  Tts.setDefaultLanguage('es-US');
  Tts.speak(`Usted esta en ${currentPlace}`);
  return (   
      <Text style={styles.textPlace}> { currentPlace } </Text>
  );  
};

const styles = StyleSheet.create({
	textPlace: {
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 5
	}
});

export default CurrentLocation;
