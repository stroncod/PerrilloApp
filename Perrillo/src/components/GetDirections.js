import React, { Component } from 'react';
import { 
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
      /*
        Getting the geocoding address latituted and longitude after 
        @param = prop given after the voice recording and confirmation
       */ 
      //Geocoder.fallbackToGoogle('YOUR_GOOGLE_KEY'); Add this if geocoding doesn't work
      Geocoder.geocodeAddress(this.props.direction)
      .then((results) => this.setState({ geocode: results }))
      .catch((error) => console.log(error.message));
  }
  handleGetDirections = () => {
    const data = {
      destination: {
        latitude: this.state.geocode[0].position.lat,
        longitude: this.state.geocode[0].position.lng,
      },
      params: [
        {
          //value can be: 
          //w (walking), 
          //c (car), 
          //set to r for public transportation
          key: 'dirflg',
          value: 'r',
        },
        {
          //Set the view on text and not map (in google maps app)
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
        <Button onPress={this.handleGetDirections} title="Aceptar" />
      </View>
    );
  }
}
