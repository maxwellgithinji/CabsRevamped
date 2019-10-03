import React, {Component} from 'react';

import images from '../../../../assets/images/';

import OnboardingLayout from '../../assets/OnboardignLayouts/OnboardingLayouts';

export default class FourthIntroScreen extends Component {
  render() {
    return (
      <OnboardingLayout
        logoText="Get There"
        ImageSource={images.introScreen4}
        footer="Board your cab"
        footerDescription="The nearest cab will be at your location within the
          specified time limit shown to you. You can always track your
          cab before it arrives"
        actionRoute={e => {
          console.log(e);
        }}
        onboardingButton="getStarted"
      />
    );
  }
}
