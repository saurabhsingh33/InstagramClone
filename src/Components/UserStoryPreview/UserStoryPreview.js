import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Styles from './Styles';

const Story = (props) => {

  const {
    story: {
      user: {
        id,
        imageUri,
        name
      }
    }
  } = props
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate("Story", { userId: id })
  }
  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={Styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
