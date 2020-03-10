// App.js
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import Header from './src/Header'
import Input from './src/Input'
import Button from './src/Button'
import TodoList from './src/TodoList'
import TabBar from './src/TabBar'

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
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setType = this.setType.bind(this)
  }

  setType (type) {
    this.setState({ type })
  }

  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = todos.filter(todo => todo.todoIndex !== todoIndex)
    console.log(todoIndex, todos)
    this.setState({ todos })
  }
  toggleComplete (todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo)=>{
      if(todo.todoIndex === todoIndex){
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
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
    console.log('todos', todos)
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
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Header />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
            type={type}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType}/>
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
