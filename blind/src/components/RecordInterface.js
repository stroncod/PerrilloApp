import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

export default class RecordInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itStopRecording: false,
      started: '',
      results: [],
    }; 
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  //componentWillUnmount() {
    //Voice.destroy().then(Voice.removeAllListeners);
  //}

  onSpeechError(e) {
    Alert.alert(
    'Problemas con el reconocimiento',
    JSON.stringify(e.error),
  [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ],
    );
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }
  onSpeechEnd() {
    this.setState({
      itStopRecording: true
    });
  }

  async _startRecognizing() {
    this.setState({
      started: '',
      results: [],
      itStopRecording: false
    });
    try {
      await Voice.start('es-US');
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
    });
  }

  render() {
    return (
      <View style={styles.container} accessible={true}>
        <Text h2 style={styles.instructions}>
          Presiona el boton grabar para ingresar la dirección a la que quieres ir. 
          Cuando hayas terminado presiona el boton finalizar para ingresar correctamente la dirección.
          Recuerda hablar despacio. Luego de escuchar la dirección ingresada, si es correcta apreta el 
          boton Confirmar, si no es correcta apreta el botón Cancelar para repetir el proceso.
        </Text>
        
      
        {this.state.results.map((result, index) => {
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
        
        {this.state.itStopRecording ? 
          <Button
            onPress={this._destroyRecognizer.bind(this)}
            title="Cancelar"
          /> 
        : null }
        {this.state.itStopRecording ? 
          <Button
            title="Confirmar"
          /> 
        : null }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
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
