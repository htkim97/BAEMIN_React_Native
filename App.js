/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform,
  PixelRatio,
  TouchableOpacity,
  Image,
} from 'react-native';



import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>
          navigation.navigate('Alert')
        }>
          <Image source={require('./assets/bell.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={styles.centerTitle}>주소지</Text>
        <TouchableOpacity>
          <Image source={require('./assets/qr-code.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.title}></View>
      <View style={styles.body}></View>
      <View style={styles.bottom}></View>
    </View>
  )
}

function AlertScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component = {HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Alert"
          component={AlertScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const { width, height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;

const scale = screenWidth / 320;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerTitle: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'blue',
    fontSize: normalize(20),
    width: '100%',
    height: '8%',
    backgroundColor: 'skyblue'

  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: '7%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  body: {
    flex: 1,
    backgroundColor: 'red',
  },
  bottom: {
    height: '9%',
    backgroundColor: 'gold'
  }

});

function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}


export default App;
