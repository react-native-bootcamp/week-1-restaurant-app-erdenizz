import React from 'react'
import {SafeAreaView, Text, View, Image} from 'react-native'
import Header from './components/Header';
import List from './components/List';

const Main = () =>{
    return(
        <SafeAreaView style={{flex:1}}>
        <Header title="Restaurant Reviews"/>
        
          <List/>
          </SafeAreaView>
       
    )
}

export default Main