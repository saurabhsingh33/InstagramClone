import React from 'react';
import { Image } from 'react-native';
import Styles from './BodyStyles';

const Body = ({ imageUri }) => {
    return (
        <Image
            source={{ uri: imageUri }}
            style={Styles.image}
        />
    )
}

export default Body;
