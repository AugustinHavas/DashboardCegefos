import React, { Component } from "react";
import ViewContact from "../components/ViewContact";

class ViewContactScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    render() {
        const {navigation} = this.props;
        const {contact} = this.props.route.params;
        return <ViewContact contact={contact} />
    }
}

export default ViewContactScreen