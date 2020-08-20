import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import ScreenContainer from '../../screens/ScreenContainer';
import RegisterForm from '../../forms/RegisterForm';

const Register = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.registerContainer}>
        <RegisterForm />
        <View style={styles.helpTextWrapper}>
          <Text style={styles.helpText}>Do you already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.push('Login')}>
            <Text style={styles.helpText}>Let's sign in here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
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

export default Register;
