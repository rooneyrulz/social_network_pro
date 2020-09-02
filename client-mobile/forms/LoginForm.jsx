import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

import styles from '../styles/auth';

const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = ({ loginUser }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(value) => loginUser(value)}
    >
      {(props) => (
        <View>
          <View style={styles.authInputFieldWrapper}>
            <TextInput
              style={styles.authInputField}
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
            />
            <Text style={styles.authErrorText}>
              {props.touched.username && props.errors.username}
            </Text>
          </View>
          <View style={styles.authInputFieldWrapper}>
            <TextInput
              style={styles.authInputField}
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
            />
            <Text style={styles.authErrorText}>
              {props.touched.password && props.errors.password}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.authBtn}
              onPress={props.handleSubmit}
            >
              <Text style={styles.authBtnText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default connect(null, { loginUser })(LoginForm);
