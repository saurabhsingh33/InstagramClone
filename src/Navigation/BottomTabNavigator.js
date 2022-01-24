import React, { useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import Search from "../Screens/Search/Search";
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

                if (route.name === 'Home') {
                    return <Foundation name="home" size={size} color={color} />
                } else if (route.name === 'Search') {
                    return <AntDesign name="search1" size={size} color={color} />
                } else if (route.name === 'Reels') {
                    return <AntDesign name="instagram" size={size} color={color} />
                } else if (route.name === 'Activity') {
                    return <AntDesign name="hearto" size={size} color={color} />
                } else if (route.name === 'Profile') {
                    return <Ionicons name="person-circle" size={size} color={color} />
                }
            },
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false,

        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Reels" component={HomeScreen} />
            <Tab.Screen name="Activity" component={HomeScreen} />
            <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;
