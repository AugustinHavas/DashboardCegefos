import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";

class ConvertisseurForm extends Component {
    state = {
        usd: 0,
        euro: 0,
        yuan: 0,
    };

    render() {
        const usd = this.state.usd.toString();
        const euro = this.state.euro.toString();
        const yuan = this.state.yuan.toString();

        return (
            <View style={styles.form}>
                <View style={styles.flexRow}>
                    <Text style={styles.label}>{'\u0024'}</Text>
                    <TextInput
                        style={styles.input}
                        value={usd}
                        placeholder={'USD \u0024'}
                        onChangeText={value => this.setState({usd: (value)})}
                    />
                    <Pressable style={styles.btn} title={'Convertir'} onPress={this.onSubmitUSD} >
                        <Text>Convertir</Text>
                    </Pressable>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.label}>{'\u20AC'}</Text>
                    <TextInput
                        style={styles.input}
                        value={euro}
                        placeholder={'Euro \u20AC'}
                        onChangeText={value => this.setState({euro: (value)})}
                    />
                    <Pressable style={styles.btn} title={'Convertir'} onPress={this.onSubmitEURO} >
                        <Text>Convertir</Text>
                    </Pressable>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.label}>{'\u00A5'}</Text>
                    <TextInput
                        style={styles.input}
                        value={yuan}
                        placeholder={'Yuan \u00A5'}
                        onChangeText={value => this.setState({yuan: (value)})}
                    />
                    <Pressable style={styles.btn} title={'Convertir'} onPress={this.onSubmitYUAN} >
                        <Text>Convertir</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    onSubmitUSD = () => {
        const {usd} = this.state;
        let euro = usd*0.92;
        let yuan = usd*6.78;
        euro = Math.round(euro * 100) / 100;
        yuan = Math.round(yuan * 100) / 100;
        this.setState({euro: euro, yuan: yuan});
    };
    onSubmitEURO = () => {
        const {euro} = this.state;
        let usd = euro*1.09;
        let yuan = euro*7.37;
        usd = Math.round(usd * 100) / 100;
        yuan = Math.round(yuan * 100) / 100;
        this.setState({usd: usd, yuan: yuan});
    };
    onSubmitYUAN = () => {
        const {yuan} = this.state;
        let usd = yuan*0.15;
        let euro = yuan*0.14;
        usd = Math.round(usd * 100) / 100;
        euro = Math.round(euro * 100) / 100;
        this.setState({usd: usd, euro: euro});
    };
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'column',
        marginTop: 20,
        padding: 5,
    },
    input: {
        borderColor: "gray",
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    btn: {
        borderRadius: 8,
        padding: 6,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    flexRow: {
        flexDirection: 'row',
    },
    label: {
        padding: 10,
    }
});

export default ConvertisseurForm;
