import React, { Component } from 'react';
import { 
	Text,
	StyleSheet 
} from 'react-native';
import Tts from 'react-native-tts';

class CurrentLocation extends Component {
	constructor(props) {
      super(props);
      this.state = {
		}; 
	}
    render() {
    //Showing current place text and activating text-to-speech
      Tts.setDefaultLanguage('es-US');
      Tts.speak(`Usted esta en ${this.props.currentPlace}`);
      return (   
        <Text style={styles.textPlace}> { this.props.currentPlace } </Text>
      ); 
	}
	
}

const styles = StyleSheet.create({
	textPlace: {
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 5
	}
});

export default CurrentLocation;
