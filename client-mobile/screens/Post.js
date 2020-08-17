import React from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from './ScreenContainer';

const Post = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Button
        title='Go To Post Detail'
        onPress={() => navigation.push('PostDetail')}
      />
    </ScreenContainer>
  );
};

export default Post;
