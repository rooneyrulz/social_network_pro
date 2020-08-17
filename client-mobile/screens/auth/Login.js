import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from '../../screens/ScreenContainer';

import AuthContext from '../../contexts/AuthContext';

const Login = ({ route }) => {
  const { login } = useContext(AuthContext);
  return (
    <ScreenContainer>
      <Button title='Sign In' onPress={() => login()} />
    </ScreenContainer>
  );
};

export default Login;
