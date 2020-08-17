import React from 'react';
import { View, Text, Button } from 'react-native';

import globalStyles from '../../styles/styles';

const Register = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Button title='Login' onPress={() => navigation.push('Login')} />
    </View>
  );
};

export default Register;
