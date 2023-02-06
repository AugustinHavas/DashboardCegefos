import React, {Component} from 'react';
import {View} from 'react-native';
import ConvertisseurForm from '../components/ConvertisseurForm';

class ConvertisseurDevise extends Component {
  render() {
    return (
        <View>
            <ConvertisseurForm />
        </View>
    );
}
}

export default ConvertisseurDevise;
