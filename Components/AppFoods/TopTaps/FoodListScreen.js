import React, { Component, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import TOC from './TOC';



class FoodListScreen extends Component {
    
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <TOC data={this.props.data}></TOC>
            </View>
        )
    }


}

export default FoodListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    }
})