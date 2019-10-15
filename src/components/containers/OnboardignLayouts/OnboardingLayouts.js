import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';

import {ProceedButton} from '../Buttons/Buttons';

export default class OnboardingLayout extends Component {
  state = {
    buttonColor: 'black',
    textColor: 'white',
  };

  componentDidMount() {
    this.setState(state => {
      return {
        ...state,
        buttonColor: 'black',
        textColor: 'white',
      };
    });
  }

  handlePress() {
    const {actionRoute} = this.props;
    actionRoute();
  }

  render() {
    const {buttonColor, textColor} = this.state;
    const {
      logoText,
      footer,
      footerDescription,
      ImageSource,
      onboardingButton,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>{logoText}</Text>
        </View>
        <Image style={styles.Image} source={ImageSource} />
        <View style={styles.bottom}>
          <Text style={styles.footer}>{footer}</Text>
          <Text style={styles.footerDescription}>{footerDescription}</Text>
        </View>
        <ProceedButton
          buttonColor={buttonColor}
          textColor={textColor}
          onPress={() => this.handlePress()}
          buttonTitle={
            onboardingButton === 'proceed' ? 'Proceed' : 'Get Started'
          }
        />
      </View>
    );
  }
}
