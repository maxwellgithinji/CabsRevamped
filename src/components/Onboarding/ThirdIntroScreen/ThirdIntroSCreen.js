import React, {Component} from 'react';

import {Actions} from 'react-native-router-flux';

import images from '../../../../assets/images/';

import OnboardingLayout from '../../containers/OnboardignLayouts/OnboardingLayouts';

export default class ThirdIntroScreen extends Component {
  handlePress() {
    Actions.FourthIntroScreen();
  }

  render() {
    return (
      <OnboardingLayout
        logoText="Get There"
        ImageSource={images.introScreen3}
        footer="Pick your Ride"
        footerDescription=" Select the type of ride you would like to complete the journey in.
          You will be able to choose from cars that are available based on
          your location"
        actionRoute={this.handlePress}
        onboardingButton="proceed"
      />
    );
  }
}
