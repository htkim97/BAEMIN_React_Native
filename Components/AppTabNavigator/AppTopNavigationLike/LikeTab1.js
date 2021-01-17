import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default class LikeTab extends Component{

    render(){
        return(
            <View style={style.container}>
                <Text>LikeTab1</Text>
            </View>
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