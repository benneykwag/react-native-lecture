// src/Button.js
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({ submitTodo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        underlayColor='#efefef'
        style={styles.button}
        onPress={submitTodo}
      >
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end'
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, .1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    color: '#666666',
    fontWeight: '600'
  }
});
export default Button;
