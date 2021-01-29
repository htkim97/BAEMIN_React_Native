import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainScreen from './Components/MainScreen';
import AlertScreen from './Components/AlertScreen';
import QrcodeScreen from './Components/QrcodeScreen';
import Search from './Components/AppFoods/SearchScreen';
import GiftScreen from './Components/AppFoods/GiftScreen';
import GetOrMeetScreen from './Components/AppFoods/GetOrMeetScreen';
import OneManScreen from './Components/AppFoods/OneManScreen';
import Korean from './Components/AppFoods/FoodScreen';

import login from './Components/ProfileTaps/login'
import level from './Components/ProfileTaps/level'
import coupon from './Components/ProfileTaps/coupon'
import point from './Components/ProfileTaps/point'
import giftBox from './Components/ProfileTaps/giftBox'
import keepStore from './Components/ProfileTaps/keepStore'
import orderList from './Components/ProfileTaps/orderList'
import review from './Components/ProfileTaps/review'
import signUp from './Components/signUpTab/signUp'
import phonNum from './Components/signUpTab/phonNum'


import ListDetail from './Components/ListDetail';

import Icon from 'react-native-vector-icons/Ionicons';

import nickname from './Components/ProfileTaps/nickname'
import level from './Components/ProfileTaps/level'
import coupon from './Components/ProfileTaps/coupon'



const Stack = createStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="Qrcode" component={QrcodeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Gift" component={GiftScreen} />
        <Stack.Screen name="GetOrMeet" component={GetOrMeetScreen} />
        <Stack.Screen name="OneMan" component={OneManScreen} />
        <Stack.Screen name="Korean" component={Korean} options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            textAlign: 'center'
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerRight: () => (
            <View></View>
          )
        })} />

        <Stack.Screen name="login" component={login}/>



        <Stack.Screen name="ListDetail" component={ListDetail} options={{headerTitle: false,
          headerRight:()=>(
            <TouchableOpacity>
              <Icon name="search-outline" size={23} style={{marginRight: 12}}/>
            </TouchableOpacity>
          ),
          headerStyle:{
            elevation: 0,
            shadowOpacity: 0
          }
        }}/>

        <Stack.Screen name="nickname" component={nickname}/>

        <Stack.Screen name="level" component={level}/>
        <Stack.Screen name="coupon" component={coupon}/>
        <Stack.Screen name="point" component={point}/>
        <Stack.Screen name="giftBox" component={giftBox}/>
        <Stack.Screen name="orderList" component={orderList}/>
        <Stack.Screen name="keepStore" component={keepStore}/>
        <Stack.Screen name="review" component={review}/>

        <Stack.Screen name="signUp" component={signUp}/>
        <Stack.Screen name="phonNum" component={phonNum}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;