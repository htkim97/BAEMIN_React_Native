import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, Platform, PixelRatio } from 'react-native';

import Swiper from 'react-native-swiper';
const { width,height } = Dimensions.get('window');
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
  

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './commponents/Explore/Category';
const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'white' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total} 모두보기
            </Text>
        </View>
    )
}

function LikeTab({navigation}) {
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}scrollEventThrottle={16}>
                    <Swiper renderPagination={renderPagination} autoplay={true} autoplayTimeout={10} style={{ height: 160 }}>
                        <View
                            style={styles.slide}

                        >
                            <Image style={styles.image} source={require('./img/1.jpg')} />
                        </View>
                        <View
                            style={styles.slide}

                        >
                            <Image style={styles.image} source={require('./img/2.jpg')} />
                        </View>
                        <View
                            style={styles.slide}

                        >
                            <Image style={styles.image} source={require('./img/3.jpg')} />
                        </View>
                        <View
                            style={styles.slide}
                        >
                            <Image style={styles.image} source={require('./img/4.jpg')} />
                        </View>
                    </Swiper>
                    <View style={{ flex: 1, backgroundColor: '#fff', height: 380, marginBottom: 10 }}>
                        <TouchableOpacity style={{
                            width: '90%', height: 50, marginBottom: 10, marginTop: 10, marginRight: 'auto', marginLeft: 'auto'
                            , borderColor: '#000', borderWidth: 2, borderRadius: 7
                        }} onPress={()=>{navigation.navigate('Search')}}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                <Icon name="search" color={'#000'} size={20} />
                                <Text style={{ marginLeft: 10 }}>먹고 싶은 메뉴, 가게 검색</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
                            <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Gift')}}
                                >
                                    <Icon name="gift-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>선물하기</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('GetOrMeet')}}
                                >
                                    <Icon name="logo-dropbox" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>포장/방문</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('OneMan')}}
                                >
                                    <Icon name="information-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>1인분</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'korean', name: '한식'});}}
                                >
                                    <Icon name="ios-ellipse-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>한식</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'snack', name: '분식'});}}
                                >
                                    <Icon name="ios-egg-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>분식</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'cafe', name: '카페.디저트'});}}
                                >
                                    <Icon name="ios-ice-cream-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>카페.디저트</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'japan', name: '돈까스.회.일식'});}}
                                >
                                    <Icon name="ios-server" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>돈까스.회.일식</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'chicken', name: '치킨'});}}
                                >
                                    <Icon name="ios-logo-twitter" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>치킨</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'pizza', name: '피자'});}}
                                >
                                    <Icon name="pizza-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>피자</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'asea', name: '아시안.양식'});}}
                                >
                                    <Icon name="ios-leaf" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>아시안.양식</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'china', name: '중국집'});}}
                                >
                                    <Icon name="md-home-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>중국집</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'foot', name: '족발.보쌈'});}}
                                >
                                    <Icon name="md-paw-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>족발.보쌈</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'night', name:'야식'});}}
                                >
                                    <Icon name="md-beer-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>야식</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'soup', name: '찜.탕'});}}
                                >
                                    <Icon name="md-sunny-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>찜.탕</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'lunchbox', name: '도시락'});}}
                                >
                                    <Icon name="ios-file-tray-sharp" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>도시락</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', height: 26 }}>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}
                                    onPress={()=>{navigation.navigate('Korean',{firstScreen:'fast', name: '패스트푸드'});}}
                                >
                                    <Icon name="md-rocket-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>패스트푸드</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="ios-fast-food-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>프랜차이즈</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="md-trophy-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>맛집랭킹</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="md-restaurant-outline" size={30} color={'#000'} />
                                    <Text style={{ fontSize: normalize(10) }}>전국별미</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 200, backgroundColor: '#fff', marginBottom: 10 }}>
                        <View style={{ flext: 1, flexDirection: 'row', width: '90%', height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, marginRight: 10 }}>오늘의 할인</Text>
                            <Icon name="archive" size={30} color={'#000'} />
                            <TouchableOpacity style={{ position: 'absolute', right: 0 }}>
                                <Text style={{ color: 'grey' }}>전체보기</Text>
                            </TouchableOpacity>

                        </View>                            

                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 5}}>
                            <View style={{ height: 135, marginTop: 5, alignItems: 'center'}}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('./img/1.jpg')}/>
                                    <Category imageUri={require('./img/2.jpg')}/>
                                    <Category imageUri={require('./img/3.jpg')}/>
                                    <TouchableOpacity>
                                        <View style={{ height: 130, width: 130, marginLeft: 10, marginRight: 10 ,borderRadius: 10,  backgroundColor: '#fff',
                                            shadowColor: 'black', shadowOpacity: 0, shadowRadius: 5, shadowOffset:{
                                                height: 5, width: 5,
                                            },elevation: 4
                                        }}>
                                            <View style={{ flex: 2, padding: 15 }}>
                                                <Text style={{fontWeight: 'bold' , fontSize: 15}}>
                                                    더 많은{'\n'}
                                                    할인혜택{'\n'}
                                                    보기 
                                                </Text>
                                                <Icon name="ios-arrow-forward-outline" size={30} color={'#000'} style={{position: 'absolute', right: 15, bottom: 15}}/>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: '#fff', marginBottom: 2 }}>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}>
                            공지
                        </Text>
                        <Text style={{ marginLeft: 10, color: 'grey' }}>
                            개인정보처리방침 개정 안내(1월 25일 개정)
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: '#fff', }}>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}>
                            이벤트
                        </Text>
                        <Text style={{ marginLeft: 10, color: 'grey' }}>
                            본죽 4천원 할인해요!
                        </Text>
                    </View>
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
                            <Text>(주)우아한 형제들</Text>
                        </View>
                        <Text style={{color:'grey', fontSize: normalize(10), marginBottom: 30, width: '90%', marginRight: 'auto', marginLeft: 'auto'}}>
                            배달의민족은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 배달의민족은 상품 . 거래 정보 및 거래에 책임을 지지 않습니다.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    
}
export default LikeTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        flex: 1,
        resizeMode: 'stretch'
    },
    paginationStyle: {
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