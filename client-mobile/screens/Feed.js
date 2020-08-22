import React from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from './ScreenContainer';
import globalStyle from '../styles/styles';

const Post = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Button
        title='Go To Post Detail'
        onPress={() => navigation.push('FeedDetail')}
      />
    </ScreenContainer>
  );
};

export default Post;
