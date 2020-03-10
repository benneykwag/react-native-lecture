// App.js
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import Header from './src/Header'
import Input from './src/Input'
import Button from './src/Button'

let todoIndex = 0
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
  }

  inputChange (inputValue) {
    console.log('inputValue : ', inputValue)
    this.setState({
      inputValue
    })
  }

  submitTodo () {
    console.log(this.state.inputValue)
    // 공백일 경우 리턴
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState(
      {
        todos,
        inputValue: ''
      },
      () => {
        // 콜백 함수
        console.log('State: ', this.state)
      }
    )
  }

  render () {
    const { inputValue } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Header />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <Button submitTodo={this.submitTodo}/>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App
