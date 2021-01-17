import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, Platform, PixelRatio  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Swiper from 'react-native-swiper';

const { width,height } = Dimensions.get('window');

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'white' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}
const screenWidth = width;
const screenHeight = height;

const scale = screenWidth / 320;

function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }
  
export default class LikeTab extends Component {

    render() {

        return (

            <ScrollView style={{ flex: 1 }}>

                <TouchableOpacity style={{ flex: 1, height: 160 }}>
                    <Image style={{ flex: 1, resizeMode: 'stretch', width: '100%' }} source={require('./img/1.jpg')} />
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: '#fff', height: 310, marginBottom: 10 }}>

                    <View style={{ flex: 1, width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
                        <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-ice-cream-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>카페.디저트</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-egg-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>분식</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="md-rocket-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>패스트푸드</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-ellipse-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>한식</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-logo-twitter" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>치킨</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-server" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>돈까스.회.일식</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="pizza-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>피자</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="md-paw-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>족발.보쌈</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-leaf" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>아시안.양식</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="md-beer-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>야식</Text>
                            </TouchableOpacity>


                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>

                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="ios-file-tray-sharp" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>도시락</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="md-home-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>중국집</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="md-sunny-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>찜.탕</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="md-trophy-outline" size={30} color={'#000'} />
                                <Text style={{ fontSize: normalize(10) }}>맛집랭킹</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        width: '90%', height: 50, marginBottom: 10, marginTop: 10, marginRight: 'auto', marginLeft: 'auto'
                        , borderColor: '#000', borderWidth: 2, borderRadius: 7
                    }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                            <Icon name="search" color={'#000'} size={20} />
                            <Text style={{ marginLeft: 10 }}>먹고 싶은 메뉴, 가게 검색</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Swiper renderPagination={renderPagination} autoplay={true} autoplayTimeout={10} style={{height: 100 }}>
                    <View
                        style={styles.slide}

                    >
                        <Image style={styles.image} source={require('./img/2.jpg')} />
                    </View>
                    <View
                        style={styles.slide}

                    >
                        <Image style={styles.image} source={require('./img/1.jpg')} />
                    </View>

                </Swiper>
                <View style={{ flex: 1, height: 150 }}>
                        <View style={{flex:1, flexDirection: 'row', height: 20, marginLeft: 20, marginTop: 30}}>
                            <TouchableOpacity>
                                <Text style={{color: 'grey', fontSize: normalize(10)}}>사업자정보확인</Text>
                            </TouchableOpacity>
                            <Text style={{color: 'grey', fontSize: normalize(10), marginLeft: 5, marginRight:5}}>
                                |
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color: 'grey', fontSize: normalize(10)}}>이용약관</Text>
                            </TouchableOpacity>
                            <Text style={{color: 'grey', fontSize: normalize(10), marginLeft: 5, marginRight:5}}>
                                |
                            </Text>
                            <TouchableOpacity>
                                <Text style={{color: 'grey', fontSize: normalize(10)}}>전자금융거래이용약관</Text>
                            </TouchableOpacity>
                            <Text style={{color: 'grey', fontSize: normalize(10), marginLeft: 5, marginRight:5}}>
                                |
                            </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: normalize(10)}}>개인정보처리방침</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, width: '90%', marginRight:'auto', marginLeft: 'auto'}}>
                            <Text>(주)우아한 형재들</Text>
                        </View>
                        <Text style={{color:'grey', fontSize: normalize(10), marginBottom: 30, width: '90%', marginRight: 'auto', marginLeft: 'auto'}}>
                            배달의민족은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 배달의민족은 상품 . 거래 정보 및 거래에 책임을 지지 않습니다.
                        </Text>
                    </View>



            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, image: {
        width,
        flex: 1,
        resizeMode: 'stretch'
    },    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#424242BF',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50
    },
    paginationText: {
        color: 'white',

    }
})