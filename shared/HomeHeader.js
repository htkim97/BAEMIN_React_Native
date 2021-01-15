import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
export default function Header(){
    return (
        <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name='notifications-outline' style={{paddingLeft:10}} />
                </TouchableOpacity>
                <Text style={styles.headerText}>주소지</Text>
                <TouchableOpacity>
                    <Icon name='qr-code-outline' style={{paddingRight:10}}/>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText:{
        fontWeight:'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
})