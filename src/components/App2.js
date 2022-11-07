import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import ContactListScreen from '../screens/ContactListScreen';
import ViewContactScreen from '../screens/ViewContactScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ContactListScreen} />
        <Stack.Screen name="Details" component={ViewContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
