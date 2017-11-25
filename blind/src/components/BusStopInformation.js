import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

import Tts from 'react-native-tts';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { normalize, schema } from 'normalizr';

export default class BusStopInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
      busStopInfo: []
		};
	}
	componentWillMount() {
		axios.get('http://www.transantiago.cl/predictor/prediccion?codsimt=PC49&codser=')
		.then(response => this.setState({ busStopInfo: response.data.servicios.item }))
		.catch((error) => console.log(error.message));
	}
  arriveInfoToSpeech(stopInfo) {
    if (stopInfo != null) {
      Tts.setDefaultLanguage('es-US');
      Tts.speak(stopInfo);
    }
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView >
        <List containerStyle={{ marginBottom: 20 }}>
      {this.state.busStopInfo.map(item => (
        <ListItem
          key={item.codigorespuesta}
          title={item.servicio}
          subtitle={item.horaprediccionbus1 ? null : item.respuestaServicio}
          onPress={() => this.arriveInfoToSpeech(item.horaprediccionbus1)}
        />      
      ))
    }
    </List>       
      </ScrollView>
    );
  }

}
