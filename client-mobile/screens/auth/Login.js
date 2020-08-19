import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';

import { connect } from 'react-redux';

import ScreenContainer from '../../screens/ScreenContainer';

const Login = ({ navigation, auth: { isAuthenticated } }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onHandleSubmit = (e) => {
    if (!username || !password) Alert.alert('Oops! Invalid fields');
    console.log(formData);
  };

  if (isAuthenticated) navigation.navigate('Home');

  return (
    <ScreenContainer>
      <View style={styles.loginContainer}>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            style={styles.inputField}
            placeholder='Username'
            onChangeText={(value) =>
              setFormData({ ...formData, username: value })
            }
          />
        </View>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            style={styles.inputField}
            placeholder='Password'
            onChangeText={(value) =>
              setFormData({ ...formData, password: value })
            }
          />
        </View>
        <View>
          <Button
            style={styles.loginBtn}
            title='Login'
            onPress={(e) => onHandleSubmit(e)}
          />
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

  inputFieldWrapper: {
    marginBottom: 10,
  },

  inputField: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Login);
