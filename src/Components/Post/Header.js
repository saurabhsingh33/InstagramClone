import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Styles from './HeaderStyles';

const Header = ({ imageUri, name }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.left}>
                <ProfilePicture uri={imageUri} size={40} />
                <Text style={Styles.name}>{name}</Text>
            </View>
            <View style={Styles.right}>
                <MaterialCommunityIcons name={"dots-vertical"} size={20} color={"black"} />
            </View>
        </View>
    )
}

export default Header;
