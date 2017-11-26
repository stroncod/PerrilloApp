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

export default class BusStopInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
      busStopInfo: [],
      latitude: -33.54589434,
      longitude: -70.58713939,
      busStops: [],
      error: null, 
		};
	}
	componentWillMount() {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
	}
  componentDidMount() {
    const lat = String(this.state.latitude);
    const lon = String(this.state.longitude);
    const url = 'http://www.transantiago.cl/restservice/rest/getpuntoparada?lat='+ lat +'&lon='+ lon;
    axios.get(url)
    .then(response => this.setState({ busStops: response.data }))
    .catch((error) => console.log(error.message));     
  }
  gettingBusStopInfo() {
    this.state.busStops.slice(0, 1).map(busStop => (
        axios.get('http://www.transantiago.cl/predictor/prediccion?codsimt='+ 
                  busStop.cod + '&codser='
                  )
      .then(response => this.setState({ busStopInfo: response.data.servicios.item }))
      .catch((error) => console.log(error.message))    
      ));    
  }
  arriveInfoToSpeech(stopInfo) {
    if (stopInfo != null) {
      Tts.setDefaultLanguage('es-US');
      Tts.speak(stopInfo);
    }
  }

  render() {
    console.log(this.state);
    this.gettingBusStopInfo();
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
