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
      isInit: false,
    };
  }
  componentDidMount() {
      console.log(this.props.direction);
      Geocoder.geocodeAddress(this.props.direction)
      .then((results) => this.setState({ geocode: results }))
      .catch((error) => console.log(error.message));
  }
  handleGetDirections = () => {
    console.log(this.state.geocode[0]);
    const data = {
      destination: {
        latitude: this.state.geocode[0].position.lat,
        longitude: this.state.geocode[0].position.lng,
      },
      params: [
        {
          key: 'dirflg',
          value: 'r',
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
