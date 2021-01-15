import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My배민</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
})