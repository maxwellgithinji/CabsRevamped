import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {BackHandler, Actions} from 'react-native-router-flux';

import styles from './styles';

import {ProceedButton} from '../../assets/Buttons/Buttons';

export default class SecondIntroScreen extends Component {
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
          source={require('../../../assets/images/introScreen2.png')}
        />
        <View style={styles.bottom}>
          <Text style={styles.footer}>Choose your location</Text>
          <Text style={styles.footerDescription}>
            First choose a pickup location followed by the drop-off location.
            This will alert our drivers and one of them will be on their way to
            get you
          </Text>
        </View>
        <ProceedButton buttonColor={buttonColor} textColor={textColor} />
      </View>
    );
  }
}
