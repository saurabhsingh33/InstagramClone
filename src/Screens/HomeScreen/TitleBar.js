import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';
import HomeScreen from './HomeScreen';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Styles from './TitleBarStyles';
import logo from '../../Assets/Images/logo.png';

const Stack = createStackNavigator();

const HomeTitleBar = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Instagram',
                    headerRight: () =>
                        <View style={Styles.container}>
                            <Feather name='plus-square' color={"black"} size={30} />
                            <Fontisto
                                name='messenger'
                                color={"black"}
                                size={30}
                                style={{
                                    marginLeft: 30
                                }}
                            />
                        </View>
                    ,
                    headerTitle: () => (
                        <Image
                            source={logo}
                            style={{
                                width: 120,
                                height: 50,
                            }}
                            resizeMode='contain'
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeTitleBar;
