import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    fontSize: 55,
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
});
