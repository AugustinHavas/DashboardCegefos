import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Todo from './Todo';

class TodoList extends Component
{
    
    state = {todos: this.props.todos};

    render() {
        return (
            <View style={styles.todoList}>
                {this.state.todos.map(todo => <Todo todo={todo} updateTodoLabel={label => this.props.updateTodoLabel(todo.id, label)} key={todo.id} />)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoList: {
        flex: 1,
        alignItems: 'stretch',
    }
})

export default TodoList