import React from 'react'
import  { Navigation } from "react-native-navigation"
import Screens from './Screens'
import DefaultScreen from './DefaultScreen'

const registerScreens = () => {
  Navigation.registerComponent(Screens.DefaultScreen, () => DefaultScreen);
}

export default registerScreens
