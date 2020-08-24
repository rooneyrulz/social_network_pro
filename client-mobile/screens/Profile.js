import React from 'react';
import { View, Text, Button } from 'react-native';

import ScreenContainer from '../screens/ScreenContainer';

const Profile = ({ navigation }) => (
  <ScreenContainer>
    <Button
      title='Go To Profile Detail'
      onPress={() => navigation.push('ProfileDetail')}
    />
  </ScreenContainer>
);

export default Profile;