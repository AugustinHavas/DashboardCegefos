import React, {Component} from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

class IMCForm extends Component {
    state = {
        name: this.props.fields.name,
        weight: this.props.fields.weight,
        size: this.props.fields.size,
    };

    render() {
        const name = this.state.name;
        const weight = this.state.weight;
        const size = this.state.size;

        return (
            <View style={styles.form}>
                <TextInput
                    value={name}
                    placeholder={'Entrez votre nom'}
                    onChangeText={value => this.setState({name: value})}
                />
                <TextInput
                    keyboardType={'numeric'}
                    value={weight}
                    placeholder={'Entrez votre poids'}
                    onChangeText={value => this.setState({weight: value})}
                />
                <TextInput
                    keyboardType={'numeric'}
                    value={size}
                    placeholder={'Entrez votre taille en cm'}
                    onChangeText={value => this.setState({size: value})}
                />
                <Button title={'Calculer'} onPress={this.onSubmit} />
            </View>
        );
    }

    onSubmit = () => {
        const {updateFields} = this.props;
        const {name} = this.state;
        const {weight} = this.state;
        const {size} = this.state;
        updateFields(name, weight, size);
    };
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'column',
    },
});

export default IMCForm;
