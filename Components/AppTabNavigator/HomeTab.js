import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Image, Dimensions } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import HomeTab1 from './AppTopNavigation/HomeTab1';
import HomeTab2 from './AppTopNavigation/HomeTab2';

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
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
          component={HomeTab1}
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