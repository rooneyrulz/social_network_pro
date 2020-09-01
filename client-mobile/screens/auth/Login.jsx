import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ScreenContainer from '../ScreenContainer';
import LoginForm from '../../forms/LoginForm';

import styles from '../../styles/auth';

const Login = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.authContainer}>
        <View style={styles.authFormWrapper}>
          <LoginForm />
        </View>
        <View style={styles.authHelpTextWrapper}>
          <Text style={styles.authHelpText}>
            Don't you already have an account?
          </Text>
          <TouchableOpacity
            style={styles.authBtnBottom}
            onPress={() => navigation.push('Register')}
          >
            <Text style={styles.authBtnBottomText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
