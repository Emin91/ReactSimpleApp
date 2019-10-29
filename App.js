
import React, {Component} from 'react';
import {StyleSheet, View, Alert, Text, Image, ToastAndroid, TouchableOpacity} from 'react-native'
import { height, width } from './constans'

export default class App extends Component {

// Other Message box
//  alert_msg = () => {
//   Alert.alert(
//     'This is React Native Alert message',
//     "This is simple message",
//     [ 
      
//       {text: 'Exit', onPress: () => console.log('Was clicked Exit button')},
//       {
//         text: 'Cancel',
//         onPress: () => console.log('Cancel Pressed'),
//         style: 'default',
//       },
//       {text: 'OK', onPress: () => console.log('OK Pressed')},
//     ],
//     {cancelable: false},
//   );
//  }

	render() {
        console.log('height', height, 'widht', width)
		return (
      <View style={styles.container}>
          <View style={styles.imageLogoView}>
            <Image style={styles.imageLogo} 
                    source={{ uri:"https://i.ibb.co/DDKtgJy/deveducationlogo.png" }}/>
          </View>
          <View style={styles.mainTextView}>
            <Text style={styles.mainText} 
                  onPress={() =>ToastAndroid.show('React Native simple toast notification', ToastAndroid.SHORT)}>React Native</Text>
          </View>
          <View>
            <View>
              <Image style={styles.gifAnim} 
                      source={{ uri:"https://media.giphy.com/media/DdlNfYtvJzleM/giphy.gif" }}/>
            </View>    
          </View>
          <View>
            <TouchableOpacity style={styles.button}  
                onPress={() =>Alert.alert('', "This is simple message", [{text: 'OK', onPress: () =>console.log('Clicked "Click ME!" button')}])}>  
                  <Text style={styles.buttonText}>Click Me!</Text>
            </TouchableOpacity>
          </View>
      </View>   
	  );
  } 
} 



const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262929',
},
    gifAnim: {
        width: 350,
        height: 350,
    },

    imageLogoView: {
        width: 500,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b8d9',
        borderRadius: 10,
    },

    imageLogo: {
        width: 350, 
        height: 50,
    },

    mainTextView: {
        marginTop: 0,
    },

    mainText: {
        fontWeight: 'bold',
        color: '#00b8d9',
        fontSize: 50,
        
    },

    button: {
        width: 350,
        borderRadius: 15,
        marginTop: "10%",
        backgroundColor: '#00b8d9',
        padding: 20,
    },

    buttonText: {
        fontWeight: '100',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
});	