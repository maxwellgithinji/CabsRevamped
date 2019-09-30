import React, {Component} from 'react';

import {Text, ImageBackground, StyleSheet, View} from 'react-native';

export default class FirstIntroScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../assets/images/introScreen1.png')}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoDescription}>WELCOME TO</Text>
            <Text style={styles.logoText}>Get There</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.footer}>Book a cab in 3</Text>
            <Text style={styles.footerDescription}>Simple steps</Text>
          </View>
          <View style={styles.myButton}>
            <Text style={styles.myButtonIconText}>›››</Text>
            <Text style={styles.myButtonText}>Proceed</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: '-apple-system, BlinkMacSystemFont Segoe UI',
    textDecorationColor: 'white',
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 36,
  },
  logoText: {
    fontSize: 65,
    fontWeight: 'bold',
    color: 'white',
  },
  logoDescription: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',
  },
  footer: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  footerDescription: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  myButton: {
    padding: -10,
    borderRadius: 200,
    backgroundColor: 'white',
    height: 300,
    width: 250,
    marginBottom: -210,
    textAlign: 'center',
  },
  myButtonIconText: {
    textAlign: 'center',
    paddingTop: -10,
    fontFamily: 'Ant Design',
    letterSpacing: -6,
    fontSize: 40,
  },
  myButtonText: {
    textAlign: 'center',
    fontFamily: 'Ant Design',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'black',
    paddingTop: -20,
    paddingBottom: 10,
    marginBottom: 180,
  },
});
