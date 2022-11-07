import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ShowResult from '../components/ShowResult';

class CalculIMC extends Component {
    state = {
        name: '',
        weight: 0,
        size: 0,
    };

    updateFields = (name, weight, size) => {
        this.setState({name: name, weight: weight, size: size});
        console.log(this.state);
    };

    render() {
        const data = this.state;
        return (
            <View style={styles.container}>
                <ShowResult fields={data} updateFields={this.updateFields} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
    },
    list: {
        paddingLeft: 20,
    },
});

export default CalculIMC;
