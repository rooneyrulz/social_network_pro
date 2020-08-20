import React from 'react';
import { StyleSheet, View } from 'react-native';

import ScreenContainer from '../../screens/ScreenContainer';
import LoginForm from '../../forms/LoginForm';

const Login = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.loginContainer}>
        <LoginForm />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
});

export default Login;
