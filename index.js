import React, { Component } from 'react';
import {
  requireNativeComponent,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

const { AirPlay } = NativeModules;

let AirPlayButton = requireNativeComponent('AirPlayButton', RAirPlayButton);


// Create AirPlay Button
class RAirPlayButton extends Component {

  render() {
    return (<AirPlayButton {...this.props} />);
  }
}

// Export methods and button component

export default {
  startScan: () => {
    AirPlay.startScan()
  },

  isAlreadyConnected: () => {
    AirPlay.isAlreadyConnected()
  },

  Button: RAirPlayButton

}