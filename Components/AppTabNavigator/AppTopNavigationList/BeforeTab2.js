import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();


export default class BeforeTab1 extends Component{

    render(){
        return(
            <ScrollView>
            <View style={{ flexDirection: 'column', height: 200, backgroundColor: '#fff', marginTop: 9 }}>

                <View style={{ flexDirection: 'row', margin: 5 ,marginLeft: 10}}>
                    <Icon name="home" size={30} color={'#000'} />
                    <Text style={{ marginLeft: 10, fontSize: 15, margin: 10, color: 'grey' }}>
                        20시간전
            </Text>

                </View>

                <View style={{ margin: 4 }}>

                    <Text style={{ marginLeft: 15, fontSize: 18 }}>
                       하나로 마트 주례점
            </Text>

                </View>

                <View style={{ margin: 4 }}>

                    <Text style={{ marginLeft: 15, fontSize: 12 }}>
                        청양고추 외 11개 46,900원
            </Text>

                </View>

                <View style={{ flexDirection: 'row' , marginLeft:"auto" , marginRight:"auto"}}>
                    <TouchableOpacity>
                        <View style={{
                            height: 50, width: 100, marginTop: 5, marginLeft: 15, marginRight: 10, borderRadius: 10, backgroundColor: '#fff',
                            borderColor: '#D3D3D3', borderWidth: 1, borderRadius: 7, alignItems:"center"
                        }}>
                            <View style={{ flex: 2, padding: 15 }}>
                                <Icon name="md-pencil" size={20} color={'#000'} style={{ position: 'absolute', right: 65, bottom: 15 }} />
                                <Text style={{ fontWeight: 'bold', fontSize: 15 , left:10}}>
                                    리뷰쓰기
                                            </Text>


                            </View>



                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            height: 50, width: 100, marginTop: 5, marginLeft: 15, marginRight: 10, borderRadius: 10, backgroundColor: '#fff',
                            borderColor: '#D3D3D3', borderWidth: 1, borderRadius: 7, alignItems:"center"
                        }}>
                            <View style={{ flex: 2, padding: 15 }}>
                                <Icon name="home" size={20} color={'#000'} style={{ position: 'absolute', right: 65, bottom: 15 }} />
                                <Text style={{ fontWeight: 'bold', fontSize: 15 , left:12}}>
                                    가게보기
                                            </Text>


                            </View>



                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{
                            height: 50, width: 100, marginTop: 5, marginLeft: 15, marginRight: 10, borderRadius: 10, backgroundColor: '#fff',
                            borderColor: '#D3D3D3', borderWidth: 1, borderRadius: 7, alignItems:"center"
                        }}>
                            <View style={{ flex: 2, padding: 15 }}>
                                <Icon name="list" size={20} color={'#000'} style={{ position: 'absolute', right: 65, bottom: 15 }} />
                                <Text style={{ fontWeight: 'bold', fontSize: 15,left:12 }}>
                                    주문상세
                                            </Text>


                            </View>



                        </View>

                    </TouchableOpacity>

                </View>



                <View style={{ margin: 5 }}>
                    <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 12, color: 'grey' }}>
                        리뷰 쓰기는 주문 이후 3일 동안만 가능합니다
    </Text>

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