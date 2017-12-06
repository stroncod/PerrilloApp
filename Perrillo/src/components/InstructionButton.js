import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

//Component Button to activate 
const Button = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>Instrucciones</Text>
  </TouchableOpacity>
);

//In this variable, the audio is pre-recorded
//ToDo: name of audio given by props
const instructions = new Sound('instructions_record.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }	
	});

export default class RecordInterface extends Component  {
	constructor(props) {
    super(props);
    Sound.setCategory('Playback');
   }   
   //Stoping when unmount
   //ToDo: stoping by press
	componentWillUnmount() {
		instructions.stop();
	}
  /*
    Function to record
    success fallback managing response if error or else
   */
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
