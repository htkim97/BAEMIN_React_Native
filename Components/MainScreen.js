import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import BeforeTab from './AppTabNavigator/BeforeTab';
import LikeTab from './AppTabNavigator/LikeTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import WhatTab from './AppTabNavigator/WhatTab';


const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main" component={HomeStackScreen} />
            <Tab.Screen name="What" component={WhatStackScreen} />
            <Tab.Screen name="Like" component={LikeStackScreen} />
            <Tab.Screen name="Before" component={BeforeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
    )
}


export default MyTabs;


const HomeStackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeTab} options={HomeTab.navigationOptions} />
    </Stack.Navigator>
);

const WhatStackScreen = ({ navigation }) => (

    <Stack.Navigator>
        <Stack.Screen name="What" component={WhatTab} options={WhatTab.navigationOptions} />
    </Stack.Navigator>
);

const LikeStackScreen = ({navigation}) =>(
    <Stack.Navigator>
        <Stack.Screen name="Like" component={LikeTab} options={LikeTab.navigationOptions} />
    </Stack.Navigator>
)

const BeforeStackScreen = ({navigation}) =>(
    <Stack.Navigator>
        <Stack.Screen name="Before" component={BeforeTab} options={BeforeTab.navigationOptions} />
    </Stack.Navigator>
)
const ProfileStackScreen = ({navigation}) =>(
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileTab} options={ProfileTab.navigationOptions} />
    </Stack.Navigator>
)