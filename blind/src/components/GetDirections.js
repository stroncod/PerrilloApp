import React, { Component } from 'react';
import { 
	Text,
	StyleSheet,
	View,
	Button,
} from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import Geocoder from 'react-native-geocoder';


export default class gmapsDirections extends Component {
    constructor(props) {
    super(props);
    this.state = {
      geocode: [],
    };
  }
  componentWillMount(props) {
      Geocoder.geocodeAddress(props)
      .then((results) => this.setState({ geocode: results }))
      .catch((error) => console.log(error.message));
    }

  handleGetDirections = (state) => {
    const data = {
      destination: {
        latitude: Number(state.geocode[0].position.lat),
        longitude: Number(state.geocode[0].position.lng),
      },
      params: [
        {
          key: 'dirflg',
          value: 'w',
        },
        {
          key: 'view',
          value: 'text',
        }
      ]
    };
    getDirections(data);
  }

  render() {
    return (
      <View >
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}
