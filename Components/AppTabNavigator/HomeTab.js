import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Image, Dimensions } from 'react-native';

import Header from '../../shared/HomeHeader';

const { width } = Dimensions.get("window");

export default class HomeTab extends Component {

    static navigationOptions = {
        headerTitle: () => <Header />,
    }
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateXTabOne: new Animated.Value(0),
        translateY: -1000
        
    }
    handleSlide = type => {
        let { active, xTabOne, xTabTwo, translateX , translateXTabOne, translateXTabTwo} = this.state;
        Animated.timing(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true,
        }).start();
        if(active === 0){
            Animated.parallel([
                Animated.timing(translateXTabOne, {
                    toValue:0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.timing(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ])
        }else{
            Animated.parallel([
                Animated.timing(translateXTabOne, {
                    toValue:-width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.timing(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ])
        }
    }

    render() {
        let { xTabOne, xTabTwo, translateX, active , translateXTabTwo, translateXTabOne, translateY} = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 50,
                            position: 'relative'
                        }}
                    >
                        <Animated.View
                            style={{
                                position: 'absolute',
                                width: '50%',
                                height: '10%',
                                left: 0,
                                bottom: 0,
                                backgroundColor: '#29BBB6',
                                transform: [{
                                    translateX
                                }]
                            }}

                        />

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onLayout={event => this.setState({ xTabOne: event.nativeEvent.layout.x })}
                            onPress={() => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}
                        >
                            <Text
                                style={{ color: active == 0 ? '#29BBB6' : '#000' }}
                            >
                                배달
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onLayout={event => this.setState({ xTabTwo: event.nativeEvent.layout.x })}
                            onPress={() => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}

                        >
                            <Text
                                style={{ color: active == 0 ? '#000' : '#29BBB6' }}
                            >
                                포장/방문
                            </Text>

                        </TouchableOpacity>
                    </View>


                    <ScrollView>
                        <Animated.View style={{ 
                            flex:1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform:[{
                                translateX: translateXTabOne
                            }]
                        }}

                        onLayout={event =>
                            this.setState({
                                translateY: event.nativeEvent.layout.height
                            })
                        }
                        >
                            <Text>여기는 배달</Text>
                        </Animated.View>

                        <Animated.View style={{
                            flex:1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform:[{
                                translateX: translateXTabTwo
                            },{
                                translateY: -translateY
                            }
                        
                        ]
                        }}>
                            <Text>여기는 포장/방문</Text>
                        </Animated.View>
                    </ScrollView>
                </View>
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