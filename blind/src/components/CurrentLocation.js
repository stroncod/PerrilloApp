import React from 'react';
import { 
	Text,
	StyleSheet 
} from 'react-native';
import Tts from 'react-native-tts';

const CurrentLocation = ({ currentPlace }) => {
  
  Tts.setDefaultLanguage('es-US');
  Tts.speak(`Usted esta en ${currentPlace}`);
  return (   
      <Text style={styles.textPlace}> { currentPlace } </Text>
  );  
};

const styles = StyleSheet.create({
	textPlace: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 5
	}
});

export default CurrentLocation;
