import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar as NativeStatusBar,
} from 'react-native';

import globalStyles from './styles/styles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>SOCIAL NETWORK PRO</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({});
