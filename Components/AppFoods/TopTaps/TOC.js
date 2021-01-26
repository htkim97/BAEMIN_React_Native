import React, { Component, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
class TOC extends Component{
    render(){
        var data = this.props.data;
        console.log(data);
        return(
            <View>
                <ScrollView>
                <View style={{flex: 1,flexDirection: 'row' ,width: '100%', alignItems: 'center', backgroundColor: '#fff'}}>
                    <Text style={{fontWeight: 'bold'}}>오픈리스트</Text>
                    <Text> 광고</Text>
                    <Icon name="question"></Icon>
                </View>
                <FlatList
                    data={data}
                    
                    renderItem={({item}) => 
                    
                    <TouchableOpacity style={{backgroundColor: '#fff', height: 130,marginBottom: 2, paddingTop: 10}}>
                        <View style={{flex: 1, flexDirection: 'row', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                            <View style={{width: 100, height: 100, }}>
                                <Image style={{flex: 1, width: null, height: null, resizeMode: 'cover' ,borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30}} source={require('../../img/1.jpg')} />
                            </View>
                            <View style={{flex:4, marginLeft: 10, marginTop: 5}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.key}</Text>
                                <Text style={styles.defaultText}>{item.point}</Text>
                                <Text style={styles.defaultText}>최소주문:{item.price}</Text>
                                <Text style={styles.defaultText}>배달팁</Text>
                            </View>
                   
                        </View>
                    </TouchableOpacity>}
                />
                </ScrollView>
            </View>
        )
    }
}

export default TOC;


const styles = StyleSheet.create({
    defaultText:{
        fontSize: 15
    }
})