import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';

import Header from '../../shared/WhateHeader'

export default class WhatTab extends Component{

    static navigationOptions = {
        headerTitle: () =><Header />, 
    }
    render(){
        return(
            <View style={style.container}>
                <Text>WhatTab</Text>
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