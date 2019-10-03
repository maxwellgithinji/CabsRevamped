/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Button,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var RNFS = require('react-native-fs');
// create a path you want to write to
var path = RNFS.ExternalStorageDirectoryPath + '/test.txt';
export default class Wired extends Component {
  onSave = () => {
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {/* <TouchableOpacity>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
        </TouchableOpacity> */}
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={() => this.onSave()} title="click">
          Click me
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
