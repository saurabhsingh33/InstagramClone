import React from 'react';
import { Image, View } from 'react-native';
import Styles from './Styles';

const ProfilePicture = ({ uri, size = 70 }) => {
  return (
    <View style={[Styles.container, { width: size + 4, height: size + 4 }]}>
      <Image
        source={{
          uri // same as uri: uri
        }}
        style={[Styles.image, { width: size, height: size }]}
      />
    </View>
  );
};

export default ProfilePicture;
