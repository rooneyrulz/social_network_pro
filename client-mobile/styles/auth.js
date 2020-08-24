import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  authFormWrapper: {
    flex: 9,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  authHelpTextWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  authHelpText: {
    fontSize: 16,
    paddingBottom: 10,
    color: '#333',
  },
  authBtnBottom: {
    backgroundColor: 'tomato',
    width: '100%',
    padding: 15,
  },
  authBtnBottomText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },

  // Auth Form Styles

  authInputFieldWrapper: {
    // marginBottom: 10,
  },

  authInputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  authBtn: {
    width: '100%',
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 5,
  },
  authBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
  authErrorText: {
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  authErrorInputField: {
    borderColor: 'crimson',
  },
});
