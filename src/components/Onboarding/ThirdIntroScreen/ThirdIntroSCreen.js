import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {BackHandler, Actions} from 'react-native-router-flux';

import styles from './styles';

import {ProceedButton} from '../../assets/Buttons/Buttons';

export default class ThirdIntroScreen extends Component {
  state = {buttonColor: 'black', textColor: 'white'};

  componentDidMount() {
    this.setState(state => {
      return {...state, buttonColor: 'black', textColor: 'white'};
    });
  }

  render() {
    const {buttonColor, textColor} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Get There</Text>
        </View>
        <Image
          style={styles.Image}
          source={require('../../../assets/images/introScreen3.png')}
        />
        <View style={styles.bottom}>
          <Text style={styles.footer}>Pick your Ride</Text>
          <Text style={styles.footerDescription}>
            Select the type of ride you would like to complete the journey in.
            You will be able to choose from cars that are available based on
            your location
          </Text>
        </View>
        <ProceedButton buttonColor={buttonColor} textColor={textColor} />
      </View>
    );
  }
}
