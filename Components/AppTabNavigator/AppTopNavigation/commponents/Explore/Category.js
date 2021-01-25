import React, {Component} from 'react';
import {
    View,
    Test,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

class Category extends Component{
    render(){
        return(
            <TouchableOpacity style={{ height: 130, width: 250, marginLeft: 10, marginRight: 10, borderWidth: 0.5,borderRadius: 10,  backgroundColor: '#fff',
            shadowColor: 'black', shadowOpacity: 0, shadowRadius: 5, shadowOffset:{
                height: 5, width: 5,
            },elevation: 4
            }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri} 
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' ,
                        borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10
                    }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})