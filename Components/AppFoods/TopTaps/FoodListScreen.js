import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class FoodListScreen extends Component{

    render(){
        return(
            <View style={style.container}>
            <Text>리스트 화면</Text>
        
       
       
       
       
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