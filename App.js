
import React, {Component} from 'react';
import {StyleSheet, View, Alert, TouchableOpacity, Text, Image, Dimensions} from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'


export default class App extends Component {

 alert_msg = () => {
  Alert.alert(
    'This is React Native Alert message',
    "This is simple message",
    [ 
      
      {text: 'Exit', onPress: () => console.log('Was clicked Exit button')},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'default',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
 }

	render() {
		return (
      <View style={styles.container}>
        <ImageZoom
              cropHeight={100}
              cropWidth={Dimensions.get('window').width}
              imageWidth={350}
              imageHeight={45}>
            <Image style={styles.image}
              source={{uri: 'https://i.ibb.co/DDKtgJy/deveducationlogo.png'}}/>
          </ImageZoom>
          <View>
            <Text style={styles.mainText}>Hello Everybody!</Text>
          </View>
          <View>
          <TouchableOpacity style={styles.button} onPress={this.alert_msg}>  
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
    paddingTop: 15,
    backgroundColor: '#38393b',
},
button: {
  borderRadius: 30,
  marginTop: "107%",
  alignItems: 'center',
  backgroundColor: '#00b8d9',
  padding: 10,
},
buttonText: {
  fontWeight: '100',
  color: '#FFFFFF',
  fontSize: 20,
  textAlign: 'center',
},
image: {
    width: 350, 
    height: 45,
},
	mainText: {
    fontWeight: 'bold',
    color: '#00b8d9',
    fontSize: 40,
    textAlign: 'center',
},
});	