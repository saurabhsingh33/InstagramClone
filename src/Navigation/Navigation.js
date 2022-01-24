import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./BottomTabNavigator";

function RootNavigation() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

export default RootNavigation;