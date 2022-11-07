import React, {Component} from 'react'
import { View, StyleSheet } from 'react-native'
import TodoList from './TodoList'

class App extends Component
{
  state = {
    todos: [
      {id: 1, label: 'Buy some milk'},
      {id: 2, label: 'Learn some React'},
    ]
  }

  updateTodoLabel = (todoId, label) => {
    const {todos} = this.state
    const todoIndex = todos.findIndex(t => t.id === todoId)
    const todosBefore = todos.slice(0, todoIndex)
    const todosAfter = todos.slice(todoIndex + 1)
    const newTodo = {...todos[todoIndex], label}
    this.setState({
      todos: [...todosBefore, newTodo, ...todosAfter]
    })
  }

  render() {
    const {todos} = this.state
    return (
      <View style={styles.container}>
        <TodoList todos={todos} updateTodoLabel={this.updateTodoLabel} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  }
})

export default App