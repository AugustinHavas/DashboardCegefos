import React, { Component } from "react";
import ContactList from "../components/ContactList";

class ContactListScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    goToContactDetails = contact => {
        const {navigation} = this.props
        navigation.navigate('Details', {contact})
    }

    render() {
        return <ContactList goToContactDetails={this.goToContactDetails} />
    }
}

export default ContactListScreen