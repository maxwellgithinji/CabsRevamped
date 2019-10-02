/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Scene, Stack, Router} from 'react-native-router-flux';

import FirstIntroScreen from './src/components/Onboarding/FirstInrtoScreen/FirstIntroScreen';
import SecondIntroScreen from './src/components/Onboarding/SecondIntroScreen/SecondIntroScreen';
import ThirdIntroScreen from './src/components/Onboarding/ThirdIntroScreen/ThirdIntroSCreen';

export default class APP extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene
            key="FirstIntroScreen"
            component={FirstIntroScreen}
            hideNavBar={true}
          />
          <Scene
            key="SecondIntroScreen"
            component={SecondIntroScreen}
            hideNavBar={true}
          />
          <Scene
            key="ThirdIntroScreen"
            component={ThirdIntroScreen}
            hideNavBar={true}
          />
        </Stack>
      </Router>
    );
  }
}
