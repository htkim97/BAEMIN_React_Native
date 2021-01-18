import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();


export default class BeforeTab1 extends Component{

    render(){
        return(
            <View style={{ flexDirection: 'column',height: 200, backgroundColor: '#fff', marginTop:10}}>
            <ScrollView>
            <View style={{ flexDirection: 'row',margin:5}}>
            <Icon name="home" size={30} color={'#000'} margin={10}  />
            <Text style={{ marginLeft: 15, fontSize: 15, margin:10,color:'grey'}}>
                20시간전
                </Text>
                
           </View>

           <View style={{ margin:4}}>
            
            <Text style={{ marginLeft: 15, fontSize: 18}}>
                하나로 마트
                </Text>
                
           </View>

           <View style={{ margin:4}}>
            
            <Text style={{ marginLeft: 15, fontSize: 12}}>
                청양고추 50g 외 14개 41450원
                </Text>
                
           </View>

           <View style={{flexDirection: 'row'}}>
<TouchableOpacity>
<View style={{ height: 50, width: 110,marginTop:5, marginLeft: 15, marginRight: 10 ,borderRadius: 10,  backgroundColor: '#fff', 
                                            shadowColor: 'black', shadowOpacity: 0, shadowRadius: 5, shadowOffset:{height: 5, width: 5,},elevation: 4 }}>
                                            <View style={{ flex: 2, padding: 15 }}>
                                                 <Icon name="md-pencil" size={20} color={'#000'} style={{position: 'absolute', right: 15, bottom: 15}}/>
                                                 <Text style={{fontWeight: 'bold' , fontSize: 15}}>
                                                   리뷰쓰기
                                                </Text>
                                               
                                            
                                        </View>

                                        
                                        
                                        </View>
    
</TouchableOpacity>
<TouchableOpacity>
<View style={{ height: 50, width: 110,marginTop:5, marginLeft: 15, marginRight: 10 ,borderRadius: 10,  backgroundColor: '#fff', 
                                            shadowColor: 'black', shadowOpacity: 0, shadowRadius: 5, shadowOffset:{height: 5, width: 5,},elevation: 4 }}>
                                            <View style={{ flex: 2, padding: 15 }}>
                                                 <Icon name="home" size={20} color={'#000'} style={{position: 'absolute', right: 15, bottom: 15}}/>
                                                 <Text style={{fontWeight: 'bold' , fontSize: 15}}>
                                                   가게보기
                                                </Text>
                                               
                                            
                                        </View>

                                        
                                        
                                        </View>
    
</TouchableOpacity>

<TouchableOpacity>
<View style={{ height: 50, width: 110,marginTop:5, marginLeft: 15, marginRight: 10 ,borderRadius: 10,  backgroundColor: '#fff', 
                                            shadowColor: 'black', shadowOpacity: 0, shadowRadius: 5, shadowOffset:{height: 5, width: 5,},elevation: 4 }}>
                                            <View style={{ flex: 2, padding: 15 }}>
                                                 <Icon name="list" size={20} color={'#000'} style={{position: 'absolute', right: 15, bottom: 15}}/>
                                                 <Text style={{fontWeight: 'bold' , fontSize: 15}}>
                                                   주문상세
                                                </Text>
                                               
                                            
                                        </View>

                                        
                                        
                                        </View>
    
</TouchableOpacity>

</View>

          
         
<View style={{ margin:5}}>
        <Text style={{ marginTop:10, marginLeft: 15, fontSize: 12, color:'grey'}}>
                리뷰 쓰기는 주문 이후 3일 동안만 가능합니다
        </Text>
                
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
        justifyContent: 'center'
    }
})