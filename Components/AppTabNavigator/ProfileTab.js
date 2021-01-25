import React, {Component} from 'react';
import {View, Text ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import { NavigationHelpersContext } from '@react-navigation/native';
export default class ProfileTab extends Component{




    render(){
        return(
            <ScrollView>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('nickname')}}>
                
               <View style={{
                  height:95,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3', borderWidth: 1,flexDirection:'row',alignItems:'center'
               }}>

                   <Icon name="user" size={40} color={'black'} style={{left:30}}  />

                   <View style={{}}>
                       
                       <Text style={{ fontWeight: 'bold', color:'grey',left:45 ,fontSize:20}}>
                          귀한분,
                                   </Text>


                   </View>
                   <View style={{ }}>
                       
                       <Text style={{ fontWeight: 'bold',left:50 ,fontSize:20}}>
                          홍길동
                                   </Text>


                   </View>

<View style={{alignItems:'center',left:200}}>
<Icon name="chevron-small-right" size={25} color={'black'}  />
</View>


               </View>

               </TouchableOpacity>





               <View style={{
                  height:95,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3', borderWidth: 1,flexDirection:'row',alignItems:'center'
               }}>
<View style={{flexDirection:'row'}}>
                   <Icon name="bell" size={25} color={'black'} style={{left:30}}  />
                   <Icon name="bell" size={25} color={'black'} style={{left:30}}  />
                   <Icon name="bell" size={25} color={'black'} style={{left:30}}  />
                   
                       
                       <Text style={{ fontWeight: 'bold', color:'black',left:45 ,fontSize:20}}>
                          귀한분 출두요~!
                                   </Text>


   <Button style={{color:'black',borderColor:'#d3d3d3',borderWidth:1,backgroundColor:'#d3d3d3', borderRadius:5,fontSize:14,height:20,width:'auto',left:100,top:5}}
   onPress={()=>{this.props.navigation.navigate('level')}}>      
<Text>등급별 혜택</Text>
    </Button>       



                             

                   

                   </View>
                  
       


               </View>

              
            
            
                            
                            
                            
                            
                            <TouchableOpacity>
               
               <View style={{flexDirection: 'row'}}>
                   
               <View style={{height:80,width:'33%',  backgroundColor: '#fff',borderColor: '#D3D3D3', borderWidth: 1,  alignItems:"center"}}>
                   
                   
                   <View>
                   <Icon name="pinterest-with-circle" size={25} color={'gold'} style={{ marginTop:10}} />
                   </View>
                   <View style={{ flex: 2}}>
                   
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          포인트
                            </Text>


                   </View>
                   
                   


               </View>
              
               <View style={{height:80,width:'34%',  backgroundColor: '#fff',borderColor: '#D3D3D3', borderWidth: 1,  alignItems:"center"}}>
               <View>
                   <Icon name="box" size={25} color={'orange'} style={{ marginTop:10}} />
                   </View>
                   <View style={{ flex: 2}}>
                   
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          쿠폰함
                            </Text>


                   </View>
                   
                   
                   


               </View>
               
               
               <View style={{height:80,width:'33%',  backgroundColor: '#fff',borderColor: '#D3D3D3', borderWidth: 1,  alignItems:"center"}}>
               <View>
                   <Icon name="cake" size={25} color={'blue'} style={{ marginTop:10}} />
                   </View>
                   <View style={{ flex: 2}}>
                   
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          선물함
                            </Text>


                   </View>
                   
                   


               </View>
               
               </View>
               </TouchableOpacity>

               
               
               
               
               
               <TouchableOpacity>
               
               <View style={{flexDirection: 'row'}}>
               <View style={{height:80,width:'33%',  backgroundColor: '#fff',borderColor: '#D3D3D3', borderWidth: 1,  alignItems:"center"}}>
               <View>
                   <Icon name="heart" size={25} color={'red'} style={{ marginTop:10}} />
                   </View>
                   <View style={{ flex: 2}}>
                   
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          찜한가게
                            </Text>


                   </View>
                   
                   


               </View>
              
               <View style={{height:80,width:'34%',  backgroundColor: '#fff',borderColor: '#D3D3D3', borderWidth: 1,  alignItems:"center"}}>
               <View>
                   <Icon name="list" size={25} color={'#008000'} style={{ marginTop:10}} />
                   </View>
                   <View style={{ flex: 2}}>
                   
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          주문내역
                            </Text>


                   </View>
                   
                   


               </View>
               <View style={{height:80,width:'33%',  backgroundColor: '#fff',borderColor: '#D3D3D3', borderWidth: 1,  alignItems:"center"}}>
               <View>
                   <Icon name="chat" size={25} color={'skyblue'} style={{ marginTop:10}} />
                   </View>
                   <View style={{ flex: 2}}>
                   
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          리뷰관리
                            </Text>


                   </View>
                   
                   


               </View>
               </View>

               

               </TouchableOpacity>

            
               <TouchableOpacity>
               
               <View style={{
                  height:60,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3', marginTop:10
               }}>
                   <View style={{ flex: 2, padding: 15 }}>
                   <Icon name="leaf" size={25} color={'#008000'} style={{ position: 'absolute', left:20,top:20}} />
                       <Text style={{ fontWeight: 'bold', fontSize: 15 , left:40,top:8,color:'#008000'}}>
                          일회용품 덜 쓰기, 함께해요!
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:75,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3',marginTop:10
               }}>
                   <View style={{ flex:3, margin:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15,top:5 }}>
                          배민페이 등록
                                   </Text>


                   </View>

                   <View style={{alignItems:'center',left:180}}>
<Icon name="chevron-small-right" size={25} color={'black'}  />
</View>

                   <View style={{ flex: 2,margin:10}}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 10 ,color:'grey',bottom:8}}>
                          배민페이로 결제하면 최대 5.5% 배민포인트가 적립됩니다!
                                   </Text>


                   </View>
                  



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10,flexDirection:'row',marginLeft:-25 }}>
                   
                   <View style={{alignItems:'center',left:385}}>
<Icon name="chevron-small-right" size={25} color={'black'}  />
</View>

                   <Icon name="new" size={20} color={'#FF1694'} style={{ position: 'absolute', left:130,top:10}} />
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          가족계정 관리
                                   </Text>
                                   



                   </View>
 


               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                          선물하기
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15}}>
                          배민커넥트 지원
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15}}>
                          이벤트
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>


               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15}}>
                          고객센터
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15}}>
                          환경설정
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15}}>
                          약관 및 정책
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>

               <TouchableOpacity>
               
               <View style={{
                  height:65,  backgroundColor: '#fff',
                   borderColor: '#D3D3D3'
               }}>
                   <View style={{ flex: 2, padding: 10,top:10 }}>
                       
                       <Text style={{ fontWeight: 'bold', fontSize: 15}}>
                          현재 버전 10.19.1
                                   </Text>


                   </View>



               </View>

               </TouchableOpacity>








<View style={{height:40,alignItems:'center',marginTop:25}}>
    <Text style={{fontSize:10,fontStyle:'bold', color:'grey'}}>
        Copyright Woowa Brothers in Song-pa, All Rights Reserverd.
    </Text>
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