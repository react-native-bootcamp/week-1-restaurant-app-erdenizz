import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, Dimensions, Image } from 'react-native'
	


const ListItem = (props) => {
   
    return(
     
       
      <View style={{flex:1,backgroundColor : '#204051'}}>
        
        
             <View style={styles.box} >
              <Image style={styles.imageBox} source={{ uri: props.myData.image }}/>
               
               
                <View style={styles.contentBox}> 
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                        { <Text style={styles.text} >{props.myData.name}</Text> }
                        {props.myData.isPopular ?
                            <Image style={{ width: 25, height: 25, marginLeft: 8 }} source={require('../assets/hot.png')} /> : <Text></Text>
                        }
                       </View>
                       
                       <Text style={styles.locationText} >{props.myData.location}</Text> 
                    </View>
                                    
                     
                     
                     <View style={{flexDirection : 'row',}}>                    
                     <Image style={{ width: 27, height: 27, }} source={require('../assets/heart.png')} /> 
                     <Text style={{ fontSize:20}}  >{props.myData.likes}</Text> 
                     
                     </View>
                </View>            

            </View>     
      
      
    </View>
       )
}
const styles = StyleSheet.create({
    box:{
       flex:1,
        borderRadius:7,
        backgroundColor: '#84a9ac',
        margin:5
    },
    imageBox:{
        flex:1,
        height:250,
        resizeMode:'cover',
        width:Dimensions.get('window').width*0.957,       
        borderRadius:7, 
        margin:5,
     
    },
    text:{
        marginLeft:5,
        padding:2,
        fontSize:20,
        fontWeight: 'bold',
        color:'#204051',
        fontFamily: 'Sriracha-Regular',
        
    },
    contentBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e7dfd5',
        padding: 6,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    locationText:{
        marginLeft:6, 
        marginBottom:10,
        color:'#204051'

    }
   
    

})
export default ListItem
   