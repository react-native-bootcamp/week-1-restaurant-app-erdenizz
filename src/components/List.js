import React from 'react'
import {SafeAreaView, Text, View, FlatList} from 'react-native'
import data from '../data.json'
import ListItem from './ListItem'
const List = () => {
    return(
       <View>
           <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({item}) =>   <ListItem myData={item}/>}
           
           />

       </View>
    )
}
export default List