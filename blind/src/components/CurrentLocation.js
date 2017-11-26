import React, { Component } from 'react';
import { 
	Text,
	StyleSheet 
} from 'react-native';
import Tts from 'react-native-tts';

class CurrentLocation extends Component {
	//Activo el text-to-speech a español
	//y que diga el lugar por voz
	// además lo muestro en pantalla, para lectura por talkback/voiceOver
		constructor(props) {
      super(props);
    	this.state = {
    }; 
	}
	componentDidMount() {
    setTimeout(() => this.forceUpdate(), 180000);
  }

    render() {
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
