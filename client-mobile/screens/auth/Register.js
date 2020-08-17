import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from '../../screens/ScreenContainer';

import AuthContext from '../../contexts/AuthContext';

const Register = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Button title='Login' onPress={() => login()} />
    </ScreenContainer>
  );
};

export default Register;
