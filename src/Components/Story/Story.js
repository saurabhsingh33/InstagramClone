import React from 'react';
import { View, Text } from 'react-native';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Styles from './Styles';

const Story = ({ imageUri, name }) => {
  return (
    <View style={Styles.container}>
      <ProfilePicture uri={imageUri} />
      <Text style={Styles.name}>{name}</Text>
    </View>
  );
};

export default Story;
