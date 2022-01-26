import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    ActivityIndicator,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
    View,
    TextInput
} from 'react-native';
import StoriesData from '../../Data/Stories';
import Styles from './Styles';
import ProfilePicture from '../../Components/ProfilePicture/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';

const StoryScreen = () => {

    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const route = useRoute();
    const navigate = useNavigation();
    const userId = route.params.userId;

    useEffect(() => {
        const userStories = StoriesData.find(storyData => storyData.user.id === userId);

        setUserStories(userStories);
        setActiveStoryIndex(0);
    }, [])

    const navigateToNextUser = () => {
        navigate.push("Story", { userId: (parseInt(userId) + 1).toString() });
    }

    const navigateToPrevUser = () => {
        navigate.push("Story", { userId: (parseInt(userId) - 1).toString() });
    }

    const handleNext = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevious = () => {
        if (activeStoryIndex <= 0) {
            navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }

    const storyPressedHandler = (evt) => {
        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        let isRight = true;
        if (x < screenWidth / 2) {
            handlePrevious()
        } else {
            handleNext()
        }

    }

    if (!userStories) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
    const activeStory = userStories.stories[activeStoryIndex];


    return (
        <SafeAreaView style={Styles.container}>
            <TouchableWithoutFeedback onPress={storyPressedHandler} style={Styles.container}>
                <ImageBackground
                    source={{
                        uri: activeStory.imageUri
                    }}
                    style={Styles.image}
                >
                    <View style={Styles.userInfo}>
                        <ProfilePicture uri={userStories.user.imageUri} size={50} />
                        <Text style={Styles.userName}>{userStories.user.name}</Text>
                        <Text style={Styles.postedTime}>{activeStory.postedTime}</Text>
                    </View>
                    <View style={Styles.bottomContainer}>
                        <View style={Styles.textInputContainer}>
                            <TextInput
                                style={Styles.textInput}
                                editable
                                placeholder='Send message'
                                placeholderTextColor={'white'}

                            />
                        </View>
                        <View style={Styles.sendButton}>
                            <Feather name={"send"} size={30} color={"white"} />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default StoryScreen;
