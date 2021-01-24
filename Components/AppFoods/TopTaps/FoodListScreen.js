import React, {useState}from 'react';
import {View, Text ,StyleSheet} from 'react-native';



export default function FoodListScreen(){


        const [people] = useState([
            {name: 'a', key: 1},
            {name: 'b', key: 2},
            {name: 'c', key: 3},
            {name: 'd', key: 4},
        ])

        return(
            <View style={style.container}>
                {people.map((item)=>{
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )
                })}
            </View>
        )

}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 20

    }
})