import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
import GmapsDirections from './GetDirections';

export default class RecordInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itStopRecording: false,
      started: '',
      results: [],
      isReady: false,
    };
    //Biding of events
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
  //Removing listeners after unmount
  //Gives error, see: https://github.com/wenkesj/react-native-voice/issues/42 
  //ToDo: Fix this sh*t.
  //componentWillUnmount() {
    //Voice.destroy().then(Voice.removeAllListeners);
  //}

  /*
    Usually to errors
    7: No match (records anyway)
    5: server error (null recording)
   */
  onSpeechError(e) {
    console.log(e.error);
  }

  //gives you the results after startRecognizing
  onSpeechResults(e) {
    this.setState({
      results: e.value,
      isReady: true,
    });
  }
  //seting after stopRecognizing or timeout 
  onSpeechEnd() {
    this.setState({
      itStopRecording: true
    });
  }
  async _startRecognizing() {
    this.setState({
      started: '',
      results: [],
      itStopRecording: false,
      isReady: false,
    });
    try {
      await Voice.start('es-US'); //set 'en-US' for english
    } catch (e) {
      console.error(e);
    }
  }
  async _stopRecognizing() {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }
  async _cancelRecognizing() {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }
  //Función de destrucción
  async _destroyRecognizer() {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      itStopRecording: false,
      started: '',
      results: [],
      isReady: false,
    });
  }

  render() {
    return (
      <View style={styles.container} accessible={true}>   
        {this.state.results.slice(0, 1).map((result, index) => {
            //Show result via tts (no partial result and just the first one)
          const accesibilityDialog = `La dirección ingresada es ${result}`;
          Tts.speak(accesibilityDialog);
          return (
            <Text
              key={`result-${index}`}
              style={styles.stat}
            >
              {result}
            </Text>
          );
        })} 
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this._startRecognizing.bind(this)}
            title="Grabar"
            //style={styles.button}
          />
          <Button 
              onPress={this._stopRecognizing.bind(this)}
              title="Finalizar"
              //style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
        
        {this.state.itStopRecording ? 
          //Shows only after recording is ready
          <Button
            onPress={this._destroyRecognizer.bind(this)}
            title="Cancelar"
          /> 
        : null }

        {this.state.itStopRecording && this.state.isReady ? 
          //Shows only after recording is ready
          <GmapsDirections direction={this.state.results[0]} />  
          : null} 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});
