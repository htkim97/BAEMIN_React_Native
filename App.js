/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
  PixelRatio
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.title}></View>
      <View style={styles.body}></View>
      <View style={styles.bottom}></View>
    </View>
  );
};


const {width, height} = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;

const scale = screenWidth / 320;

const styles = StyleSheet.create({
  container:{
    flex : 1,
  },
  title:{
    color: 'blue',
    fontSize: normalize(20),
    width: '100%',
    height: '8%',
    backgroundColor: 'skyblue'
    
  },
  header:{
    height: '7%',
    backgroundColor: 'pink'
  },
  body:{
    flex: 1,
    backgroundColor: 'red',
  },
  bottom:{
    height: '9%',
    backgroundColor: 'gold'
  }

});

function normalize(size){
  const newSize = size * scale
  if(Platform.OS === 'ios'){
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }else{
    return Math.round(PixelRatio.roundToNearestPixel(newSize))-2
  }
}


export default App;
