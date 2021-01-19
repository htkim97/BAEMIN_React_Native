import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity , Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import BeforeTab from './AppTabNavigator/BeforeTab';
import LikeTab from './AppTabNavigator/LikeTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import WhatTab from './AppTabNavigator/WhatTab';

import  Icon  from 'react-native-vector-icons/Ionicons';

import SearchScreen from './AppFoods/SearchScreen';


const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            tabBarOptions={{
                activeTintColor: '#29BBB6'  
            }}

        >
            <Tab.Screen name="Home" component={HomeStackScreen}
                options={{
                    tabBarLabel: '홈',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-home-outline" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="What" component={WhatStackScreen}
                options={{
                    tabBarLabel: '뭐먹지',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-tv-outline" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Like" component={LikeStackScreen}
                options={{
                    tabBarLabel: '찜한가게',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-outline" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen name="Before" component={BeforeStackScreen}
                options={{
                    tabBarLabel: '주문내역',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'My배민',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-outline" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


export default MyTabs;


const HomeStackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeTab} options={{
            title: '주소지',
            headerLeft:()=>(
                <Icon.Button name='notifications-outline' color='#000' size={26} backgroundColor='#fff'  onPress={() => {
                    navigation.navigate('Alert')
                  }}/>
            ),
            headerRight:()=>(
                <Icon.Button name='qr-code-outline' color='#000' size={26} backgroundColor='#fff'onPress={() => {
                    navigation.navigate('Qrcode')
                  }}/>
            ),
            headerTitleStyle:{
                textAlign: 'center'
            },
            headerStyle:{
            elevation: 0, //안드로이드에서 밑애 그림자 지는거 없애는거
            shadowOpacity:0 //아이폰''
        }}} />
    </Stack.Navigator>
);

const WhatStackScreen = ({ navigation }) => (

    <Stack.Navigator>
        <Stack.Screen name="What" component={WhatTab} options={{
            title: '뭐먹지',
            headerTitleStyle:{
                textAlign: 'center',
                color: '#fff'
            },
            headerStyle:{
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: '#000'
            }
    }} />
    </Stack.Navigator>
);

const LikeStackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Like" component={LikeTab} options={{
            title: '찜한가게',
            headerTitleStyle:{
                textAlign: 'center',
            },           
            headerStyle:{
                elevation: 0,
                shadowOpacity: 0,
            }
        }} />
    </Stack.Navigator>
)

const BeforeStackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Before" component={BeforeTab} options={{
            title:'주문내역',
            headerTitleStyle:{
                textAlign: 'center',
            },           
            headerStyle:{
                elevation: 0,
                shadowOpacity: 0,
            },               
            headerLeft:()=>(
                <Icon.Button name='notifications-outline' color='#fff' size={26} backgroundColor='#fff'  
                  />
            ),         
            headerRight:()=>(
                <Icon.Button name='refresh-outline' color='#000' size={26} backgroundColor='#fff'onPress={() => {
                    alert('You tapped the button!');
                  }}/>
            ),
        }} />
    </Stack.Navigator>
)
const ProfileStackScreen = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileTab} options={{
            title:'My배민',
            headerTitleStyle:{
                textAlign: 'center',
            },   
        }} />
    </Stack.Navigator>
)