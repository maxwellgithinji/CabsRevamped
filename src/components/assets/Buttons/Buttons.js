import React from 'react';

import {Text, TouchableHighlight, View} from 'react-native';

import StyleSheetFactory from './styles';

export const ProceedButton = props => {
  const {textColor, buttonColor, onPress} = props;
  const styles = StyleSheetFactory.getSheet(textColor, buttonColor);

  return (
    <TouchableHighlight style={styles.ProceedButton} onPress={onPress}>
      <View>
        <Text style={styles.ProceedButtonIconText}>›››</Text>
        <Text style={styles.ProceedButtonText}>Proceed</Text>
      </View>
    </TouchableHighlight>
  );
};
