import React, {Component} from 'react';
import {View, Text ,StyleSheet, ScrollView} from 'react-native';




export default class QrcodeScreen extends Component{

    render(){
        return(
            <View style={style.container}>
                <ScrollView>
                    <View >
                        <Text>탭3</Text>
                        <Text>탭3</Text>
                        <Text>탭3</Text>
                        <Text>탭3</Text>
                    </View>
                    
                </ScrollView>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})