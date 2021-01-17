import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import BeforeTab1 from './AppTopNavigationList/BeforeTab1';
import BeforeTab2 from './AppTopNavigationList/BeforeTab2';

export default class BeforeTab extends Component{

    render(){
        return(
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
                    component={BeforeTab1}
                    options={{ tabBarLabel: '배달.포장/방문' }}
                />
                <Tab.Screen
                    name="2"
                    component={BeforeTab2}
                    options={{ tabBarLabel: 'B마트' }}
                />

            </Tab.Navigator>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})