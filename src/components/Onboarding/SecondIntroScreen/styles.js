import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 2,
    fontFamily: '-apple-system, BlinkMacSystemFont Segoe UI',
    textDecorationColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  Image: {
    flex: 3,
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    width: '100%',
    paddingBottom: 20,
  },
  logoText: {
    fontSize: 55,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',
    paddingLeft: 70,
    paddingRight: 70,
  },
  footer: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  footerDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
});
