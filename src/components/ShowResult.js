import React, {Component} from 'react';
import {Text, View} from 'react-native';
import IMCForm from './IMCForm';

class ShowResult extends Component {
    state = {
        name: this.props.fields.name,
        weight: this.props.fields.weight,
        size: this.props.fields.size,
        imc: 0,
        label: '',
    };

    render() {
        const imc = this.state.imc;
        return (
            <View>
                <IMCForm
                    fields={this.state}
                    updateFields={this.updateShowFields}
                />
                {this.state.label != undefined && this.state.label != '' ? (
                    <View>
                        <Text>Bonjour {this.state.name}</Text>
                        <Text>
                            Votre IMC (indice de masse corporelle) est
                            exactement : {this.state.imc}
                        </Text>
                        <Text>{this.state.label}</Text>
                    </View>
                ) : null}
            </View>
        );
    }

    updateShowFields = (name, weight, size) => {
        let tempSize = size / 100;
        let imc = tempSize * tempSize;
        imc = weight / imc;
        let label = '';
        if (imc < 18.5) {
            label = 'Vous êtes maigre';
        } else if (imc >= 18.5 && imc <= 25) {
            label = 'Vous avez une corpulence normale';
        } else if (imc > 25 && imc <= 30) {
            label = 'Vous êtes en surpoids';
        } else if (imc > 30) {
            label = 'Vous êtes en obésité';
        }
        this.setState({
            name: name,
            weight: weight,
            size: size,
            imc: imc,
            label: label,
        });
        this.props.updateFields(name, weight, size);
    };
}

export default ShowResult;
