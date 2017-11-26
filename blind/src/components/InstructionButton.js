import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

//Creo un componente boton para las intrucciones
const Button = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>Instrucciones</Text>
  </TouchableOpacity>
);

//guardo en la variable instructions la grabación para pre-carga del audio
//ToDo: que el nombre sea dado por el props
const instructions = new Sound('instructions_record.mp3', Sound.MAIN_BUNDLE, (error) => {
  		if (error) {
    		console.log('failed to load the sound', error);
    		return;
    				}	
	});


export default class RecordInterface extends Component {
	constructor(props) {
    super(props);
    Sound.setCategory('Playback');
   }   
   //elimina todo audio al salirse de la ventana en el que esta el componente
	componentWillUnmount() {
		instructions.stop();
	}
  //función que reproduce el audio
	onPlay() {
		instructions.play((success) => {
  			if (success) {
    		console.log('successfully finished playing');
  			} else {
    			console.log('playback failed due to audio decoding errors');
    			// reset the player to its uninitialized state (android only)
    			// this is the only option to recover after an error occured and use the player again
    			instructions.reset();
  			}
		});
	} 
	render() {
		return (
			<Button onPress={() => this.onPlay()} />
		);
	}
}

const styles = StyleSheet.create({
	button: {
    fontSize: 20,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    padding: 7,
  },
});
