/**
 * Perrillo App
 * Guide app for the blind in the chilean public transportation
 * National University Andres Bello
 * Created with <3 for stroncod
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import RouterComponent from './src/Router';

export default class App extends Component<{}> {
  render() {
    return ( 
          <RouterComponent />
    );
  }
}
