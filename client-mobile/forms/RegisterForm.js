import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// Redux
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';

const registerSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const RegisterForm = ({ registerUser }) => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={(value) => {}}
    >
      {(props) => (
        <View>
          <View style={styles.inputFieldWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
            />
            <Text style={styles.errorText}>
              {props.touched.username && props.errors.username}
            </Text>
          </View>
          <View style={styles.inputFieldWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
            />
            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
          </View>
          <View style={styles.inputFieldWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
          </View>
          <View>
            <Button
              style={styles.loginBtn}
              title='Create Account'
              onPress={props.handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default connect(null, { registerUser })(RegisterForm);

const styles = StyleSheet.create({
  inputFieldWrapper: {
    // marginBottom: 10,
  },

  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
