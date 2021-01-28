import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView} from 'react-native';



export default class QrcodeScreen extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={{margin: 20, padding: 10, width: '90%', marginLeft: 'auto', marginRight:'auto',
                    borderWidth: 3, borderColor:'brown', height:400, alignItems: 'center'
                }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>- -대표메뉴- -</Text>

                    
                </View>
                <View>
                    
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})