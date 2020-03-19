/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import firebase from 'react-native-firebase';
export default class App extends Component {
  async componentDidMount() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      const fcmToken = await firebase.messaging().getToken();
      console.log(fcmToken);
      firebase.notifications().onNotification(notification => {
        console.log(notification);
        alert('got a notification');
      });
    } else {
      try {
        firebase.messaging().requestPermission();
      } catch (e) {
        alert('user reject');
      }
    }

    // const enabled = await firebase.messaging().hasPermission();
    // console.log('enable', enabled);
    // if (enabled) {
    //   const fcmToken = firebase.messaging().getToken();
    //   console.log(fcmToken);
    // } else {
    //   try {
    //     firebase.messaging().requestPermission();
    //   } catch (e) {
    //     alert('user reject');
    //   }
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>11Sample React Native Firebase</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
