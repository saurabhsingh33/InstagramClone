import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from "./BottomTabNavigator";
import StoryScreen from "../Screens/StoryScreen/StoryScreen";

const RootStack = createStackNavigator();

function RootNavigation() {
    return (

        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    component={BottomTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name='Story'
                    component={StoryScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}

export default RootNavigation;
