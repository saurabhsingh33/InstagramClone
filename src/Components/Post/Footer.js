import React, { useState, useEffect } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './FooterStyles';

const Footer = ({ likesCount: likesCountProps, caption, postedAt }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        setLikesCount(likesCountProps);
    }, [])

    const onLikePressed = () => {
        if (isLiked) {
            setLikesCount(likesCount - 1)
        } else {
            setLikesCount(likesCount + 1)
        }
        setIsLiked(!isLiked);
    }
    return (<View style={Styles.container}>
        <View style={Styles.iconsContainer}>
            <View style={Styles.left}>
                <TouchableWithoutFeedback onPress={onLikePressed}>
                    {isLiked ?
                        <AntDesign name={"heart"} size={25} color={"red"} /> :
                        <AntDesign name={"hearto"} size={25} color={"black"} />
                    }
                </TouchableWithoutFeedback>

                <FontAwesome name={"comment-o"} size={25} color={"black"} />
                <Feather name={"send"} size={25} color={"black"} />
            </View>
            <View style={Styles.right}>
                <Feather name={"bookmark"} size={25} color={"black"} />
            </View>
        </View>
        <Text style={Styles.likes}>{likesCount} Likes</Text>
        <Text style={Styles.caption}>{caption}</Text>
        <Text style={Styles.postedAt}>{postedAt}</Text>
    </View>);
};

export default Footer;
