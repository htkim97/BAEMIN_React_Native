import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../../shared/HomeHeader';

export default class HomeTab extends Component {

    static navigationOptions = {
        headerTitle: () => <Header />,
    }
    render() {
        return (
            <View style={style.container}>
                <Text>HomeTab</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})