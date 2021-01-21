import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class FoodListScreen extends Component{

    render(){
        return(
            <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'white',
            borderWidth:1,
            borderRadius:30,
            width:100,
            height:40,
            marginTop:10,
            marginLeft:10,
            alignItems:'center',
            justifyContent:'center',
            borderColor:'#d3d3d3'
            }}>
            <View>
            <TouchableOpacity>
            <View>
                <Text>
                    배달 빠른
                </Text>
            </View>


            </TouchableOpacity>

            </View>


            
            
       </View> 


       <View style={{backgroundColor:'white',
            borderWidth:1,
            borderRadius:30,
            width:100,
            height:40,
            marginTop:10,
            marginLeft:10,
            alignItems:'center',
            justifyContent:'center',
            borderColor:'#d3d3d3'
            }}>
            <View>
            <TouchableOpacity>
            <View>
                <Text>
                    배달팁 낮은
                </Text>
            </View>


            </TouchableOpacity>

            </View>


            
            
       </View> 

       <View style={{backgroundColor:'white',
            borderWidth:1,
            borderRadius:30,
            width:100,
            height:40,
            marginTop:10,
            marginLeft:10,
            alignItems:'center',
            justifyContent:'center',
            borderColor:'#d3d3d3'
            }}>
            <View>
            <TouchableOpacity>
            <View>
                <Text>
                    기본순
                </Text>
            </View>


            </TouchableOpacity>

            </View>


            
            
       </View> 



       <View style={{backgroundColor:'white',
            borderWidth:1,
            borderRadius:30,
            width:110,
            height:40,
            marginTop:10,
            marginLeft:10,
            alignItems:'center',
            justifyContent:'center',
            borderColor:'#d3d3d3'
            }}>
            <View>
            <TouchableOpacity>
            <View>
                <Text>
                    주문 많은 순
                </Text>
            </View>


            </TouchableOpacity>

            </View>


            
            
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