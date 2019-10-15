import React, {Component} from 'react';

import {Actions} from 'react-native-router-flux';

import images from '../../../../assets/images/';

import OnboardingLayout from '../../containers/OnboardignLayouts/OnboardingLayouts';

export default class SecondIntroScreen extends Component {
  handlePress() {
    Actions.ThirdIntroScreen();
  }

  render() {
    return (
      <OnboardingLayout
        logoText="Get There"
        ImageSource={images.introScreen2}
        footer="Choose your location"
        footerDescription="First choose a pickup location followed by the drop-off location.
          This will alert our drivers and one of them will be on their way to
          get you"
        actionRoute={this.handlePress}
        onboardingButton="proceed"
      />
    );
  }
}
