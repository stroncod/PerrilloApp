import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

import Voice from 'react-native-voice';

export default class RecordButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end: '',
      started: '',
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);  
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart() {
    this.setState({
      started: 'Empezo el reconocimiento',
    });
  }

  onSpeechEnd() {
    this.setState({
      end: 'Termino el reconocimiento',
    });
  }

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

  async _startRecognizing() {
    this.setState({
      started: '',
      results: [],
      end: ''
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
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
  }

  render() {
    return (
      <View style={styles.container} accessible={true}>
        <Text h2 style={styles.instructions}>
          Presiona el boton grabar para ingresar la dirección a la que quieres ir. 
          Cuando hayas terminado presiona el boton finalizar para ingresar correctamente la dirección.
          Recuerda hablar despacio.
        </Text>
        <Text
          style={styles.stat}
        >
          {`${this.state.started}`}
        </Text>
        <Text
          style={styles.stat}
        >
          {`${this.state.end}`}
        </Text>
        <Text
          style={styles.stat}
        >
          Results
        </Text>
        {this.state.results.map((result, index) => {
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
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
