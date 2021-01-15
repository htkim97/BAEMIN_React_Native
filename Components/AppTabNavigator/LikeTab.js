import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';

import Header from '../../shared/LikeHeader';

export default class LikeTab extends Component{

    static navigationOptions = {
        headerTitle: () =><Header />, 
    }
    render(){
        return(
            <View style={style.container}>
                <Text>LikeTab</Text>
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