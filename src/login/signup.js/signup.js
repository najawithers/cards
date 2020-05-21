     
import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';


class Signup extends React.Component {


  render() {
     
    return (
     
        <View style={styles.loginScreenContainer}>
         

 <Text styles= {styles.text}> 
 What Type of Card are You Looking For?
 </Text>

<View style={{flex: 1, flexDirection: 'row'}}>

<Image source ={{uri: 'https://codehs.com/uploads/c3129510dcb94f55aed552b66a152ee5'}}
 style={{ height: 200, width: 200, justifyContent: 'center', margin: 5, alignContent: 'center' }}
/>



          
            
       <Text styles= {styles.text}> 
 Birthday
 </Text>     
          
<Image source ={{uri: 'https://codehs.com/uploads/7505ebb51162bee3e438806cec71b049'}}
 style={{ height: 200, width: 200, justifyContent: 'center', margin: 5, alignContent: 'center' }}
/>



          
            
       <Text styles= {styles.text}> 
Death
 </Text>     
 </View>
<Image source ={{uri: 'https://codehs.com/uploads/1543e9c04576746f2e2624d9adcf13c4'}}
 style={{ height: 200, width: 200, justifyContent: 'center', margin: 5, alignContent: 'center' }}
/>



          
            
       <Text styles= {styles.text}> 
 Holiday
 </Text>     
 
<Image source ={{uri: 'https://codehs.com/uploads/815fbd7aa51c67580de3c657a28b5a61'}}
 style={{ height: 200, width: 200, justifyContent: 'center', margin: 5, alignContent: 'center' }}
/>



          
            
       <Text styles= {styles.text}> 
Graduation
 </Text>     

          </View>


          
    );
  }

}



const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: '#7d0ae6',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});

export default Signup;
