import React, {Component} from 'react';
import {View, Text ,StyleSheet, ScrollView, Image} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default class LikeTab extends Component{

    render(){
        return(
            <ScrollView style={{marginTop: 10}}>
                <View style={{backgroundColor: '#fff',height: 30,justifyContent: 'center',}}>
                    <View style={{   width: '90%', marginLeft: 'auto', marginRight:'auto'}}>
                        <Text>총 1개</Text>
                    </View>
                </View>

                <View style={{backgroundColor: '#fff', height: 130,marginBottom: 2, paddingTop: 10}}>
                    <View style={{flex: 1, flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <View style={{width: 100, height: 100, }}>
                            <Image style={{flex: 1, width: null, height: null, resizeMode: 'cover' ,borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30}} source={require('../../img/1.jpg')} />
                        </View>
                        <View style={{flex:4, marginLeft: 10}}>
                            <Text>푸라닭 부산초량점</Text>
                            <Text>4.8</Text>
                            <Text>최소주문</Text>
                            <Text>배달팁</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
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