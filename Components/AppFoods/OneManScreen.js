import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from '../AppTabNavigator/HomeTab';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();




import FoodListScreen from './TopTaps/FoodListScreen';



function GetOrMeet() {
    return (
        <Tab.Navigator
            initialRouteName="GetOrMeet"
            tabBarOptions={{
                activeTintColor: '#29BBB6',
                inactiveTintColor: 'black',
                scrollEnabled: true,
                tabStyle: { width: 105 },
                indicatorStyle: {
                    backgroundColor: '#29BBB6'
                },
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: 'white' },
            }}
        >
            <Tab.Screen
                name="all"
                component={AllMenuScreen}
                options={{ tabBarLabel: '전체' }}
            />
            <Tab.Screen
                name="korean"
                component={AllMenuScreen}
                options={{ tabBarLabel: '한식' }}
            />
            <Tab.Screen
                name="snack"
                component={AllMenuScreen}
                options={{ tabBarLabel: '분식' }}
            />
            <Tab.Screen
                name="cafe"
                component={AllMenuScreen}
                options={{ tabBarLabel: '카페.디저트' }}
            />
            <Tab.Screen
                name="japan"
                component={AllMenuScreen}
                options={{ tabBarLabel: '돈까스.회.일식' }}
            />
            <Tab.Screen
                name="china"
                component={AllMenuScreen}
                options={{ tabBarLabel: '중식' }}
            />
            <Tab.Screen
                name="asea"
                component={AllMenuScreen}
                options={{ tabBarLabel: '아시안.양식' }}
            />
            <Tab.Screen
                name="fast"
                component={AllMenuScreen}
                options={{ tabBarLabel: '패스트푸드' }}
            />

            <Tab.Screen
                name="night"
                component={AllMenuScreen}
                options={{ tabBarLabel: '야식.찜.탕' }}
            />

            <Tab.Screen
                name="chpi"
                component={AllMenuScreen}
                options={{ tabBarLabel: '치킨.피자' }}
            />



        </Tab.Navigator>
    )
}

export default GetOrMeet;

const AllMenuScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name='AllM' component={FoodListScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
)
