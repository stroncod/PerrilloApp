import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

class CurrentLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      currentPlaces: [],
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

    RNGooglePlaces.getCurrentPlace()
    .then(response => this.setState({ currentPlaces: response }))
    .catch((error) => console.log(error.message));
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.currentPlaces.slice(0, 1).map(place =>
          <Text>Usted está en: {place.name} </Text>
          )}
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default CurrentLocation;
