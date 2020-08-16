// GLOBAL STYLES GO ON GERE
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' && NativeStatusBar.currentHeight,
  },
  text: {
    // color: '#000',
    fontSize: 20,
  },
});
