import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import haversine from 'haversine';

import styles from './styles';

export default class Maps extends Component {
  state = {
    buttonColor: 'white',
    textColor: 'black',
    latitude: 0,
    longitude: 0,
    error: null,
    routeCoordinates: [],
  };

  LATITUDE_DELTA = 0.009;
  LONGITUDE_DELTA = 0.009;

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 200000, maximumAge: 1000},
    );
  }

  calcDistance = newLatLng => {
    const {prevLatLng} = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: this.LATITUDE_DELTA,
    longitudeDelta: this.LONGITUDE_DELTA,
  });

  handlePress() {
    Actions.SecondIntroScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Get There</Text>
        </View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={this.getMapRegion()}>
          <Marker coordinate={this.getMapRegion()} />
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
        </MapView>
        <View style={styles.bottom}>
          <Text style={styles.footerDescription}>Footer content</Text>
        </View>
      </View>
    );
  }
}
