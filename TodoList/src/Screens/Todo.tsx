import React from 'react'
import Styled from 'styled-components/native'
import TodoListView from './TodoListView'
import AddTodo from './AddTodo'
import { View, Text } from 'react-native'
const Container = Styled.View`
    flex:1;
`;

const Todo = ({ }) => {
    return (<Container>
        <TodoListView />
        <AddTodo />
    </Container>)
}

export default Todo;