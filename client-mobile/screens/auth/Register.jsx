import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ScreenContainer from '../ScreenContainer';
import RegisterForm from '../../forms/RegisterForm';

import styles from '../../styles/auth';

const Register = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.authContainer}>
        <View style={styles.authFormWrapper}>
          <RegisterForm />
        </View>
        <View style={styles.authHelpTextWrapper}>
          <Text style={styles.authHelpText}>
            If you already have an account..
          </Text>
          <TouchableOpacity
            style={styles.authBtnBottom}
            onPress={() => navigation.pop()}
          >
            <Text style={styles.authBtnBottomText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Register;
