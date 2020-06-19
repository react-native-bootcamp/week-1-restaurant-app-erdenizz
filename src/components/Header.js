import React from 'react'
import {SafeAreaView, Text, View, StyleSheet,Dimensions} from 'react-native'

const Header = (props) =>{
    return(
        <View style={{backgroundColor : '#204051'}}>

           <View style={styles.header}>   
            <Text style={styles.headerTitle}>{props.title}</Text>
           
           </View>
        </View>
         
          
      

    )
}
const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor: '#e7dfd5',
        padding :20 ,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopStartRadius:7,
        borderTopEndRadius:7,
       
        marginLeft:5,
        marginRight:5,
       
    

    },
    headerTitle: {
        color: '#204051',
        fontSize: 35,

    }

})


export default Header