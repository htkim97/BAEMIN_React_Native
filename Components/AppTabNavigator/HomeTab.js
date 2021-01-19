import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Image, Dimensions } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createMaterialTopTabNavigator();

import HomeTab1 from './AppTopNavigation/HomeTab1';
import HomeTab2 from './AppTopNavigation/HomeTab2';
//여기도 메인처럼 바꾸고 다시 시도해보기


const Stack = createStackNavigator();
function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        swipeEnabled={false}
        
        tabBarOptions={{
          activeTintColor: '#29BBB6',
          inactiveTintColor:'black',
          indicatorStyle:{
            backgroundColor: '#29BBB6'
          },
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'white' },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Home1Screen}
          options={{ tabBarLabel: '배달' }}
        />
        <Tab.Screen
          name="Notifications"
          component={HomeTab2}
          options={{ tabBarLabel: '방문/포장' }}
        />
      </Tab.Navigator>
    );
  }


  
export default MyTabs;

const Home1Screen = ({navigation}) =>(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeTab1} options={{headerShown: false}}/>
  </Stack.Navigator>
)