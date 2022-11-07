import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

class ContactListItem extends Component {
    onPress = () => {
        const {openDetails} = this.props;
        openDetails();
    }

    render() {
        const {contact} = this.props;
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.contact}>
                    <Text>{contact.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contact: {
        padding: 40,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    }
})

export default ContactListItem