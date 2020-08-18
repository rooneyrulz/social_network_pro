import React from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from './ScreenContainer';
import globalStyle from '../styles/styles';

const Post = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text style={globalStyle.text}>Posts Feed</Text>
      <Button
        title='Go To Post Detail'
        onPress={() => navigation.push('PostDetail')}
      />
    </ScreenContainer>
  );
};

export default Post;
