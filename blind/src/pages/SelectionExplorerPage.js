import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  ListView,
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import axios from 'axios';

class SelectionExplorerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      predictions: [],
      latitude: -33.54589434,
      longitude: -70.58713939,
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
    .then(response => this.setState({ predictions: response.data }))
    .catch((error) => console.log(error.message));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView >
        <List containerStyle={{ marginBottom: 20 }}>
      {this.state.predictions.map(prediction => (
        <ListItem
          key={prediction.cod}
          title={prediction.name}
        />      
      ))
    }
    </List>       
      </ScrollView>
    );
  }
}

export default SelectionExplorerPage;
