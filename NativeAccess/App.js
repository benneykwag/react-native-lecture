/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeEventEmitter, NativeModules 
} from 'react-native'

import ToastExample from './ToastExample'

class App extends React.Component {
  // componentDidMount() {
  //   const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
  //   eventEmitter.addListener('ToastMessageEvent', (event) => {
  //      console.log('event: ', event.message) // "someValue"
  //   });
  // }
  
  render () {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          onPress={() => {
            
            // NativeModules.RNHello.addEvent('Birthday Party', 'My House')
            // NativeModules.RNHello.findEvents((resp)=> {
            //   alert(resp)
            // })
            // NativeModules.IOSNativeToast.showToast("dd")
            // NativeModules.ToastExample.measureLayout(
            //   '100',
            //   'Second arg',
            //   msg => {
            //     console.log(msg)
            //   },
            //   (arg1, arg2, arg3) => {
            //     console.log(arg1, arg2, arg3)
            //   }
            // )

            // var CalendarManager = NativeModules.CalendarManager;
            // NativeModules.RNCalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
            // NativeModules.RNCalendarManager.addEvent(
            //   'Birthday Party',
            //   '4 Privet Drive, Surrey',
            //   new Date().getTime(),
            // ); 


            // android
            NativeModules.RNNativeToastLibrary.show('Awesome')
            // NativeModules.RNNativeToastLibrary.show("Hello")
          }}
        >
          Hello
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default App
