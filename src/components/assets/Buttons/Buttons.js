import React from 'react';

import {Text, View} from 'react-native';

import StyleSheetFactory from './styles';

export const ProceedButton = props => {
  const {textColor, buttonColor} = props;
  const styles = StyleSheetFactory.getSheet(textColor, buttonColor);

  return (
    <View style={styles.ProceedButton}>
      <Text style={styles.ProceedButtonIconText}>›››</Text>
      <Text style={styles.ProceedButtonText}>Proceed</Text>
    </View>
  );
};
