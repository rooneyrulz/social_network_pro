import React from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from '../../screens/ScreenContainer';

const Register = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Button title='Login' onPress={() => navigation.push('Login')} />
    </ScreenContainer>
  );
};

export default Register;
