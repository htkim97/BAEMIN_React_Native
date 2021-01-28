import React, {Component} from 'react';
import {View, Text ,StyleSheet, ScrollView} from 'react-native';



export default class QrcodeScreen extends Component{

    render(){
        return(
            <View style={style.container}>
                <View style={{margin: 20, padding: 10, width: '90%', marginLeft: 'auto', marginRight:'auto',
                    borderWidth: 3, borderColor:'brown', height:600
                }}>
                    <Text>대표메뉴</Text>
                </View>
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