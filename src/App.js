import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import Accueil from './screens/Accueil';
import CalculIMC from './screens/CalculIMC';
import ConvertisseurDevise from './screens/ConvertisseurDevise';

const Stack = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === 'Home') {
                            iconName = 'home';
                        } else if (rn === 'Calcul IMC') {
                            iconName = 'calculator';
                        } else if (rn === 'Convertisseur Devise') {
                            iconName = 'calculator';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}>
                <Stack.Screen name="Home" component={Accueil} />
                <Stack.Screen name="Calcul IMC" component={CalculIMC} />
                <Stack.Screen name="Convertisseur Devise" component={ConvertisseurDevise} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
