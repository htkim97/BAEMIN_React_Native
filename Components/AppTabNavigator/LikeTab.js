import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import LikeTab1 from './AppTopNavigationLike/LikeTab1';
import LikeTab2 from './AppTopNavigationLike/LikeTab2';
import LikeTab3 from './AppTopNavigationLike/LikeTab3';


export default class LikeTab extends Component {

    render() {
        return (
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: '#000',
                    indicatorStyle: {
                        backgroundColor: '#000'
                    },
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'white' },
                }}
            >
                <Tab.Screen
                    name="1"
                    component={LikeTab1}
                    options={{ tabBarLabel: '찜한가게' }}
                />
                <Tab.Screen
                    name="2"
                    component={LikeTab2}
                    options={{ tabBarLabel: '바로결제' }}
                />
                <Tab.Screen
                    name="3"
                    component={LikeTab3}
                    options={{ tabBarLabel: '전화주문' }}
                />
            </Tab.Navigator>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})