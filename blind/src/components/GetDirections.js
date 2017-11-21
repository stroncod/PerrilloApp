import React, { Component } from 'react';
import { 
	Text,
	StyleSheet,
	View,
	Button,
} from 'react-native';
import getDirections from 'react-native-google-maps-directions';

export default class gmapsDirections extends Component {

handleGetDirections = () => {
    const data = {
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
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
        <Button onPress={this.handleGetDirections} title="Get Directions" />
    );
  }
}
