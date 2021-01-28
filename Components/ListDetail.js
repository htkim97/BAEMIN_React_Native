import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import test from './QrcodeScreen';

const screenHeight = Dimensions.get('window').height;


import Tab1 from './FoodDetailList/TabDetail1';
import Tab2 from './FoodDetailList/TabDetail2';
import Tab3 from './FoodDetailList/TabDetail3';

export default class AlertScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [{ id: '1', title: ' 마라탕', price: 12000 },
            { id: '2', title: '두부국', price: 6000 },
            { id: '3', title: '김치', price: 2000 }]
        }
    }
    render() {
        const { route } = this.props;
        const { data } = route.params;
        return (
            <View style={style.container}>
                <ScrollView
                    stickyHeaderIndices={[1]}
                    ref={ref =>(this.scrollView = ref)}
                    
                >
                    <View style={{ flex: 1, height: 300, backgroundColor: '#fff', marginBottom: 20 }}>
                        <View style={{
                            width: '90%', marginRight: 'auto', marginLeft: 'auto', height: 200, backgroundColor: '#fff'
                            , shadowColor: '#000', shadowOffset: {
                                width: 0, height: 2
                            },
                            shadowOpacity: 0.23,
                            shadowRadius: 2.62,
                            elevation: 4,
                            borderBottomRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            alignItems: 'center'
                        }}>

                            <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>{data.item.key}</Text>
                            <Text style={{ marginVertical: 10 }}>{data.item.point}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                                <Text style={{ color: 'grey', }}>최근리뷰</Text>

                                <Text style={{ color: 'grey' }}>  |  </Text>

                                <Text style={{ color: 'grey' }}>최근 사장님 댓글</Text>

                            </View>
                            <View style={{ width: '90%', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Icon name="call-outline" size={25} />
                                        <Text>전화</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Icon name="heart-outline" size={25} />
                                        <Text>찜</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Icon name="share-outline" size={25} />
                                        <Text>공유</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}>
                            <Text>최소 주문금액 </Text>
                            <Text>결제방법 </Text>
                            <Text>배달시간 </Text>
                            <Text>배달팁 </Text>
                        </View>

                    </View>

                    <Tab.Navigator>
                        <Tab.Screen
                            name="Menu"
                            component={Tab1}
                            options={{ tabBarLabel: '메뉴' }}
                            listeners={()=>({
                                tabPress: this.scrollView.scrollTo({
                                    y:320
                                })
                            })}
                        />
                        <Tab.Screen
                            name="Info"
                            component={Tab2}
                            options={{ tabBarLabel: '정보' }}
                            listeners={()=>({
                                tabPress: e =>{this.scrollView.scrollTo({
                                    y:320
                                })}
                            })}
                        />
                        <Tab.Screen
                            name="Review"
                            component={Tab3}
                            options={{ tabBarLabel: '리뷰' }}
                            listeners={()=>({
                                tabPress: this.scrollView.scrollTo({
                                    y:320
                                })
                            })}
                        />
                    </Tab.Navigator>
 
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})