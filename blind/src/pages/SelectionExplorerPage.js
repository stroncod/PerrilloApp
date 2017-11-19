import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { List, ListItem } from 'react-native-elements';

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

  componentDidMount() {
    /*navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );*/
    RNGooglePlaces.getAutocompletePredictions('bus station', {
      types: 'geocode',
      country: 'CL',
      latitude: -33.54589434,
      longitude: -70.58713939,
      radius: 5,
    })
    .then((results) => this.setState({ predictions: results }))
    .catch((error) => console.log(error.message));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView >
        <List containerStyle={{ marginBottom: 20 }}>
      {this.state.predictions.map(prediction => (
        <ListItem
          key={prediction.placeID}
          title={prediction.fullText}
        />      
      ))
    }
    </List>       
      </ScrollView>
    );
  }
}

export default SelectionExplorerPage;
