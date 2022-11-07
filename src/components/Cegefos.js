import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import Icon from 'react-native-ionicons';

class Cegefos extends Component {
    state = {
        infos: [
            {
                id: 1,
                label: 'Raison sociale : Cegefos',
            },
            {
                id: 2,
                label: 'Type de structure : SARL',
            },
            {
                id: 3,
                label: 'Adresse : 28 Rue Xavier Bichat, 72000 Le Mans, France',
            },
            {
                id: 4,
                label: 'Téléphone : +33 2 43 52 36 45',
            },
        ],
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Cegefos est une société de formation en ligne.</Text>
                <FlatList
                    style={{marginTop: 5, marginBottom: 5}}
                    data={this.state.infos}
                    renderItem={({item}) => (
                        <Unorderedlist style={styles.list}>
                            <Text>{item.label}</Text>
                        </Unorderedlist>
                    )}
                />
                <Text>Mission : La société est spécialisée dans les informations numériques en ligne. Elle assure un contenu pédagogique et varié ainsi qu'une assistance aux apprenants.</Text>
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

export default Cegefos;
