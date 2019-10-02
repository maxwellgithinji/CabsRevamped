import React, {Component} from 'react';

import {Text, ImageBackground, View} from 'react-native';

import styles from './styles';

import {ProceedButton} from '../../assets/Buttons/Buttons';

export default class FirstIntroScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../../assets/images/introScreen1.png')}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoDescription}>WELCOME TO</Text>
            <Text style={styles.logoText}>Get There</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.footer}>Book a cab in 3</Text>
            <Text style={styles.footerDescription}>Simple steps</Text>
          </View>
          <ProceedButton buttonColor="white" textColor="black" />
        </ImageBackground>
      </View>
    );
  }
}
