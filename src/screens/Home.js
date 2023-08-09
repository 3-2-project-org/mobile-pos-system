/* eslint-disable react-native/no-inline-styles */
import {
    View,
    Text,
    Alert,
    TextInput,
    Button,
    Image,
    ToastAndroid,
  } from 'react-native';
  import React, { useState } from 'react';
  
  function HomeScreen() {
   
    return (
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>HOMEEE!</Text>
      </View>
    );
  }
  
  export default HomeScreen;