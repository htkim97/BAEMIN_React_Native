import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from '../AppTabNavigator/HomeTab';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();





import FoodListScreen from './TopTaps/FoodListScreen';
import App from '../../App';


function GetOrMeet({ route, navigation }) {
  const { firstScreen } = route.params;
  console.log(route.params);


  return (
    
    <Tab.Navigator
      initialRouteName={firstScreen}
      tabBarOptions={{
        activeTintColor: '#29BBB6',
        inactiveTintColor: 'black',
        scrollEnabled: true,
        tabStyle: { width: 105 },
        indicatorStyle: {
          backgroundColor: '#29BBB6'
        },
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="korean"

        component={FoodListMenuScreen5}
        options={{
          tabBarLabel: '한식',
          headerTitle: firstScreen
        }}
        
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'korean', name:'한식'})
          },
          
          
          
        })}
      />
      <Tab.Screen
        
        name="snack"
        component={FoodListMenuScreen3}
        options={{
          tabBarLabel: '분식',
          headerTitle: firstScreen
                }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'snack', name:'분식'})
          }
        })}

      />
      <Tab.Screen
        name="japan"
        component={FoodListMenuScreen7}
        options={{ tabBarLabel: '돈까스.회.일식' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'japan', name:'돈까스.회.일식'})
          }
        })}
      />
      <Tab.Screen
        name="chicken"
        component={FoodListMenuScreen6}
        options={{ tabBarLabel: '치킨' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'chicken', name:'치킨'})
          }
        })}
      />
      <Tab.Screen
        name="pizza"
        component={FoodListMenuScreen8}
        options={{ tabBarLabel: '피자' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'pizza', name:'피자'})
          }
        })}
      />
      <Tab.Screen
        name="asea"
        component={FoodListMenuScreen10}
        options={{ tabBarLabel: '아시안.양식' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'asea', name:'아시안.양식'})
          }
        })}
      />
      <Tab.Screen
        name="china"
        component={FoodListMenuScreen13}
        options={{ tabBarLabel: '중식' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'china', name:'중식'})
          }
        })}
      />
      <Tab.Screen
        name="foot"
        component={FoodListMenuScreen9}
        options={{ tabBarLabel: '족발.보쌈' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'foot', name:'족발.보쌈'})
          }
        })}
      />
      <Tab.Screen
        name="night"
        component={FoodListMenuScreen11}
        options={{ tabBarLabel: '야식' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'night', name:'야식'})
          }
        })}
      />
      <Tab.Screen
        name="soup"
        component={FoodListMenuScreen14}
        options={{ tabBarLabel: '찜.탕' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'soup', name:'찜.탕'})
          }
        })}
      />
      <Tab.Screen
        name="lunchbox"
        component={FoodListMenuScreen12}
        options={{ tabBarLabel: '도시락' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'lunchbox', name:'도시락'})
          }
        })}
      />
      <Tab.Screen
        name="cafe"
        component={FoodListMenuScreen2}
        options={{ tabBarLabel: '카페.디저트' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'cafe', name:'카페.디저트'})
          }
        })}
      />

      <Tab.Screen
        name="fast"
        component={FoodListMenuScreen4}
        options={{ tabBarLabel: '패스트푸드' }}
        listeners={({navigation, route}) =>({
          focus: e =>{
            navigation.navigate('Korean', {firstScreen:'fast', name:'패스트푸드'})
          }
        })}
      />










    </Tab.Navigator>
  )
}

export default GetOrMeet;


const FoodListMenuScreen2 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM2' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)
const FoodListMenuScreen3 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM3' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)
const FoodListMenuScreen4 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM4' component={FoodListScreen} options={{headerShown: false}} />
  </Stack.Navigator>
)
const FoodListMenuScreen5 = ({ navigation }) => (
  
  <Stack.Navigator>
    <Stack.Screen name='AllM5' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)
const FoodListMenuScreen6 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)

const FoodListMenuScreen7 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)


const FoodListMenuScreen8 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
)

const FoodListMenuScreen9 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
)

const FoodListMenuScreen10 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
)

const FoodListMenuScreen11 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)

const FoodListMenuScreen12 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
)

const FoodListMenuScreen13 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen} options={{headerShown: false}} />
  </Stack.Navigator>
)
const FoodListMenuScreen14 = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name='AllM6' component={FoodListScreen} options={{headerShown: false}} />
  </Stack.Navigator>
)