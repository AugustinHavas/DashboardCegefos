import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-date-picker'

class InscriptionForm extends Component {
    state = {
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
        confirmMdp: '',
        date: new Date(),
        dateIsOpen: false,
        adresse: '',
        ville: '',
        cp: '',
    };

    render() {
        const {nom, prenom, email, mdp, confirmMdp, date, dateIsOpen, adresse, ville, cp} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Nom de famille</Text>
                <TextInput
                    style={styles.input}
                    value={nom}
                    placeholder="Nom de famille"
                    onChangeText={newValue => this.setState({nom: (newValue)})}
                />
                <Text style={styles.label}>Prénom</Text>
                <TextInput
                    style={styles.input}
                    value={prenom}
                    placeholder="Prénom"
                    onChangeText={newValue => this.setState({prenom: (newValue)})}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Email"
                    onChangeText={newValue => this.setState({email: (newValue)})}
                />
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    secureTextEntry="true"
                    style={styles.input}
                    value={mdp}
                    placeholder="Mot de passe"
                    onChangeText={newValue => this.setState({mdp: (newValue)})}
                />
                <Text style={styles.label}>Confirmation du mot de passe</Text>
                <TextInput
                    secureTextEntry="true"
                    style={styles.input}
                    value={confirmMdp}
                    placeholder="Confirmation du mot de passe"
                    onChangeText={newValue => this.setState({confirmMdp: (newValue)})}
                />
                <Text style={styles.label}>Adresse</Text>
                <TextInput
                    style={styles.input}
                    value={adresse}
                    placeholder="Adresse"
                    onChangeText={newValue => this.setState({adresse: (newValue)})}
                />
                <Text style={styles.label}>Ville</Text>
                <TextInput
                    style={styles.input}
                    value={ville}
                    placeholder="Ville"
                    onChangeText={newValue => this.setState({ville: (newValue)})}
                />
                <Text style={styles.label}>Code postal</Text>
                <TextInput
                    style={styles.input}
                    value={cp}
                    placeholder="Code postal"
                    onChangeText={newValue => this.setState({cp: (newValue)})}
                />
                <Button title="Date de naissance" onPress={() => this.setState({dateIsOpen: (true)})} />
                <DatePicker
                    modal
                    maximumDate={new Date()}
                    open={dateIsOpen}
                    date={date}
                    onDateChange={newValue => this.setState({date: (newValue)})}
                    onConfirm={(newValue) => {
                        this.setState({dateIsOpen: (false)})
                        this.setState({date: (newValue)})
                    }}
                    onCancel={() => this.setState({dateIsOpen: (false)})}
                    locale='fr'
                    mode='date'
                    title='Date de naissance'
                />
                <Pressable style={styles.btn} title={'S\'inscrire'} onPress={this.sumbited} >
                        <Text style={styles.textButton}>S'inscrire</Text>
                    </Pressable>
            </View>
        );
    }

    sumbited = () => {
        if (this.state.mdp === this.state.confirmMdp) {
            console.log(this.state);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'column',
        height: 100,
    },
    btn: {
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    textButton: {
        fontSize: 18,
    }
});

export default InscriptionForm;
