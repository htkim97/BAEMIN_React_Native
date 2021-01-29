import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class login extends Component {

    state = {
        id: "",
        password: ""
    };

    handleEmail = text => {
        this.setState({ id: text });
    };



    login = (id, pass) => {
        alert(id + "님 안녕하세요");
    };



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
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.login(this.state.id, this.state.password)}
                >
                    <Text style={styles.submitButtonText}>로그인</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginLeft: 120 }}>
                    <TouchableOpacity style={{}}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{}}>
                                <Text style={{color:'grey'}}>아이디 찾기   </Text>

                            </View>




                        </View>
                    </TouchableOpacity>
                    <Text>|</Text>


                    <TouchableOpacity style={{ alignItems: 'center' }}>



                        <View>
                            <Text style={{color:'grey'}}>   비밀번호 찾기</Text>
                        </View>


                    </TouchableOpacity>
                </View>
<View style={{marginTop:90, margin:15}}>
                <View>
                    <TouchableOpacity style={styles.faceBook}>
                        <Icon name='facebook-square' size={20} color={'blue'}></Icon>
                        <Text>  페이스북으로 로그인</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.naver}>
                    <Icon name='google-wallet' size={20} color={'green'}></Icon>
                        <Text>  네이버로 로그인</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.apple}>
                    <Icon name='apple' size={20} color={'black'}></Icon>
                        <Text>  Apple로 로그인</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center',flexDirection:'row', marginLeft:75}}>
                    <Text>혹시, 배달의 민족이 처음이신가요?</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('signUp')}}>
                        <Text style={{color:'skyblue'}}>  회원가입</Text>
                    </TouchableOpacity>
                </View>

</View>

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
    faceBook:{
        borderWidth:1,
        padding:5,
        margin:20,
        borderColor:'grey',
        marginTop:100,
        flexDirection:'row',
        justifyContent: 'center'
    },
    naver:{
        borderWidth:1,
        padding:5,
        margin:20,
        alignItems:'center',
        borderColor:'grey',
        marginTop:4,
        flexDirection:'row',
        justifyContent: 'center'

    },
    apple:{
        borderWidth:1,
        padding:5,
        margin:20,
        alignItems:'center',
        borderColor:'grey',
        marginTop:4,
        flexDirection:'row',
        justifyContent: 'center'

    }
    
});


