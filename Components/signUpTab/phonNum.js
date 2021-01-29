import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class phonNum extends Component {

    
    



    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}

                    placeholder="전화번호 입력"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />
                 <TouchableOpacity
                    style={styles.submitButton2}
                    
                >
                    <Text style={styles.submitButtonText}>인증번호 전송</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}

                    placeholder="인증번호 입력"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                />
                 <TouchableOpacity
                    style={styles.submitButton2}
                    
                >
                    <Text style={styles.submitButtonText}>인증번호 확인</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}

                    placeholder="주소 입력"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                />
                
                <TouchableOpacity
                    style={styles.submitButton}
                    
                >
                    <Text style={styles.submitButtonText}>회원가입</Text>
                </TouchableOpacity>

               


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'white'
    },
    input: {
        margin: 15,
        height: 40,

        borderBottomWidth: 1,
        borderColor:'#d3d3d3',

        borderWidth: 0,

    },
    submitButton: {
        backgroundColor: "skyblue",
        padding: 10,
        margin: 30,
        height: 40,
        alignItems: 'center'

    },
    submitButtonText: {
        color: "white",
        fontSize: 15

    },
    submitButton2: {
        backgroundColor: "skyblue",
        padding: 10,
        
        height: 40,
        alignItems: 'center',
        width:129,
        marginLeft:270
        
        
    }
    
});