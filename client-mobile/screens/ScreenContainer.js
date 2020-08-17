import React from 'react';
import { View } from 'react-native';

// Global Styles
import globalStyle from '../styles/styles';

const ScreenContainer = ({ children }) => (
  <View style={globalStyle.container}>{children}</View>
);

export default ScreenContainer;
