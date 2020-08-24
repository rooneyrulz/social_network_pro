import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

// Redux
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';

import styles from '../styles/auth';

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
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
            />
            <Text style={styles.authErrorText}>
              {props.touched.email && props.errors.email}
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

export default connect(null, { registerUser })(RegisterForm);
