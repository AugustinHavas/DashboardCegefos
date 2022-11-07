import React, { Component, Fragment } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

class Todo extends Component
{
    state = {
        todo: this.props.todo,
        key: this.props.todo.id,
        editMode: false,
        label: this.props.todo.label,
        updateTodoLabel: this.props.updateTodoLabel
    };

    render() {
        const editMode = this.state.editMode;
        return (
            <View style={styles.todo}>
                {editMode ? this.renderEditMode() : this.renderViewMode()}
            </View>
        )
    }

    renderViewMode() {
        const {label} = this.state;
        return (
            <Fragment>
                <Text style={styles.todoLabel}>{label}</Text>
                <Button style={styles.todoLabel} title="Edit" onPress={this.onEditPress} />
            </Fragment>
        )
    }

    renderEditMode() {
        const {label} = this.state;
        console.log(label)
        return (
            <Fragment>
                <TextInput
                    style={[styles.editInput, styles.todoLabel]}
                    value={label}
                    onChangeText={this.onChange}
                    autoFocus
                />
                <Button title="Save" onPress={this.onSavePress} />
                <Button title="Cancel" onPress={this.onCancelPress} />
            </Fragment>
        )
    }

    onEditPress = () => {
        this.setState({
            editMode: true
        })
    }

    onChange = label => {
        this.setState({label})
    }

    onSavePress = () => {
        console.log(this.props)
        const {updateTodoLabel} = this.state
        const {label} = this.state
        this.state.todo.label = label
        updateTodoLabel(label)
        this.setState({editMode: false})
    }

    onCancelPress = () => {
        this.setState({
            editMode: false,
            label: this.props.todo.label,
        })
    }
}

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lightgray',
    },
    todoLabel: {
        textAlign: 'center',
    },
    editInput: {
        fontSize: 18,
        padding: 10,
    }
})

export default Todo