import {StyleSheet} from 'react-native';

export default class StyleSheetFactory {
  static getSheet(textColor, buttonColor) {
    return StyleSheet.create({
      ProceedButton: {
        padding: -10,
        borderRadius: 200,
        backgroundColor: buttonColor,
        height: 300,
        width: 250,
        marginBottom: -210,
        textAlign: 'center',
      },
      ProceedButtonIconText: {
        textAlign: 'center',
        paddingTop: -10,
        fontFamily: 'Ant Design',
        letterSpacing: -6,
        fontSize: 40,
        color: textColor,
      },
      ProceedButtonText: {
        textAlign: 'center',
        fontFamily: 'Ant Design',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 5,
        color: textColor,
        paddingTop: -20,
        paddingBottom: 10,
        marginBottom: 180,
      },
    });
  }
}
