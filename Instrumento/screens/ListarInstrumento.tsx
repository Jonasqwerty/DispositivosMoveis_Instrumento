import React, { useState, useEffect } from "react";
import {ActivityIndicator,SafeAreaView,View,FlatList,Text,StatusBar,} from "react-native";
import { auth, firestore } from "../firebase";
import MeuEstilo from "../meuestilo";
import { Instrumento } from "../Model/Instrumento";
const ListarInstrumento = () => {
const [loading, setLoading] = useState(true); // Set loading to true
const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]); // Initial empty array
const instrumentoRef = firestore.collection('Instrumento');

useEffect(() => {
    const subscriber = instrumentoRef
        .onSnapshot((querySnapshot) => {
        const instrumentos = [];
        querySnapshot.forEach((documentSnapshot) => {
            instrumentos.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
        });
      });
        setInstrumentos(instrumentos);
        setLoading(false);
  });
return () => subscriber();
}, [instrumentos]);


  if (loading) {
  return <ActivityIndicator />;
  }


const Item = ({ item }) => (
  <View style={MeuEstilo.item}>
    <Text style={MeuEstilo.title}>Tipo : {item.tipo}</Text>
    <Text style={MeuEstilo.title}>cor : {item.cor}</Text> 
    <Text style={MeuEstilo.title}>Data de Fabricacao : {item.datafabricacao}</Text>
  </View>
);

const renderItem = ({ item }) => <Item item={item} />;

return (
  <SafeAreaView style={MeuEstilo.containerlistar}>
    <FlatList
      data={instrumentos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
  );
};
export default ListarInstrumento;
