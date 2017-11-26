import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import BusStopInformation from '../components/BusStopInformation';
import InstructionButton from '../components/InstructionButton';

class BusStopInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      error: null,
      longitude: null, 
      isReady: false,
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        isReady: true,
      });
    },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  render() {
    return (
      <ScrollView>
      <InstructionButton instructions={'inst_record.m4a'} />
      {this.state.isReady ? 
        <BusStopInformation lat={this.state.latitude} lng={this.state.longitude} />
        : null
      }
      </ScrollView>
    );
  }

}
export default BusStopInfoPage;
