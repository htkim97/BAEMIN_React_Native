import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class login extends Component {

    
    



    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}

                    placeholder="아이디 또는 이메일"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />
                <TextInput
                    style={styles.input}

                    placeholder="비밀번호"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                />
                <TextInput
                    style={styles.input}

                    placeholder="비밀번호 확인"
                    placeholderTextColor="grey"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                />
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={()=>{this.props.navigation.navigate('phonNum')}}
                >
                    <Text style={styles.submitButtonText}>다음</Text>
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

    }
   
    
});