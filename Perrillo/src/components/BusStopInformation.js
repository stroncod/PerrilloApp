import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import Tts from 'react-native-tts';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';

export default class BusStopInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
      busStopInfo: [],
      latitude: null,
      longitude: null,
      busStops: [],
      error: null, 
		};
	}
	
  componentDidMount() {
    const lat = String(this.props.lat);
    const lng = String(this.props.lng);
    //Get all the nearby stops on that coords 
    const url = 'http://www.transantiago.cl/restservice/rest/getpuntoparada?lat='+ lat +'&lon='+ lng;
    //Async call to transantiago API
    axios.get(url)
    .then(response => this.setState({ busStops: response.data }))
    .catch((error) => console.log(error.message));     
  }
  gettingBusStopInfo() {
    //getting the first (and closest) stop, 
    //then make a call to API to get the info of that stop
    //ToDo: Managing error (API sucks sometimes)
    this.state.busStops.slice(0, 1).map(busStop => (
        axios.get('http://www.transantiago.cl/predictor/prediccion?codsimt='+ 
                  busStop.cod + '&codser='
                  )
      .then(response => this.setState({ busStopInfo: response.data.servicios.item }))
      .catch((error) => this.setState({ error: error }))    
      ));    
  }
  //Setting text to Speech when  on of the 
  //services in the stop is press on the list
  //Note: try setting language in constructor 
  arriveInfoToSpeech(stopInfo) {
    if (stopInfo != null) {
      Tts.setDefaultLanguage('es-US');
      Tts.speak(stopInfo);
    }
  }

  render() {
    /*
      Showing the list of services (buses) of the bus stop
      Some of the times are stimated or null
      if null tts won't work and subtitle won't show
     */
    if (this.props.lng != null && this.props.lat != null) {
      this.gettingBusStopInfo();
    }
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
