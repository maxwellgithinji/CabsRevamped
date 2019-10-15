import React, {Component} from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './styles';
import images from '../../../../assets/images/';

import {ProceedButton} from '../../containers/Buttons/Buttons';

export default class FirstIntroScreen extends Component {
  state = {buttonColor: 'white', textColor: 'black'};

  componentDidUpdate() {
    this.setState(state => {
      return {...state, buttonColor: 'white', textColor: 'black'};
    });
  }

  handlePress() {
    Actions.SecondIntroScreen();
  }
  render() {
    const {buttonColor, textColor} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={images.introScreen1}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoDescription}>WELCOME TO</Text>
            <Text style={styles.logoText}>Get There</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.footer}>Book a cab in 3</Text>
            <Text style={styles.footerDescription}>Simple steps</Text>
          </View>
          <ProceedButton
            buttonColor={buttonColor}
            textColor={textColor}
            onPress={() => this.handlePress()}
            buttonTitle="Proceed"
          />
        </ImageBackground>
      </View>
    );
  }
}
