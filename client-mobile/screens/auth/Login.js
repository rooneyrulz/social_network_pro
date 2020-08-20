import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import ScreenContainer from '../../screens/ScreenContainer';
import LoginForm from '../../forms/LoginForm';

const Login = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.loginContainer}>
        <LoginForm />
        <View style={styles.helpTextWrapper}>
          <Text style={styles.helpText}>
            Don't you already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.push('Register')}>
            <Text style={styles.helpText}>Let's create here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
  helpTextWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  helpText: {
    color: '#333',
    fontSize: 15,
  },
});

export default Login;
