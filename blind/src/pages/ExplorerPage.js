import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import CurrentLocation from '../components/CurrentLocation';

class ExplorerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlaces: [],
      error: null
    };
  }

  componentDidMount() {
    RNGooglePlaces.getCurrentPlace()
    .then(response => this.setState({ currentPlaces: response }))
    .catch((error) => this.setState({ error: error.messsage }));
  }
  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.state.currentPlaces.slice(0, 1).map(place =>
          <CurrentLocation currentPlace={place.name} /> 
          )}
      </View>
    );
  }

}
export default ExplorerPage;
