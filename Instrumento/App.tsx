import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManterInstrumento from './screens/ManterInstrumento';
import ListarInstrumento from './screens/ListarInstrumento';

function ManterScreen({ navigation }) {
  return (
    <ManterInstrumento></ManterInstrumento>
  );
}

function ListarScreen({ navigation }) {
  return (
    <ListarInstrumento></ListarInstrumento>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Manter" component={ManterScreen} />
        <Drawer.Screen name="Listar" component={ListarScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}