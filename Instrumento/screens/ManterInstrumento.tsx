import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {  KeyboardAvoidingView, Alert, Text, Button, Pressable, Modal, TextInput,  TouchableOpacity,  View,} from "react-native";
import { auth, firestore } from "../firebase";
import meuestilo from "../meuestilo";
import { Instrumento } from "../Model/Instrumento";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ManterInstrumento = () => {
  const [formInstrumento, setFormInstrumento] = useState<Partial<Instrumento>>({})
  const [formData, setFormData] = useState<Partial<Instrumento>>({})
  const instrumentoRef = firestore.collection('Instrumento');
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dataString, setDataString]=useState('');

  

  useEffect(() => {

  }, []);

  

  const limparFormulario=()=>{
    setFormInstrumento({})
  }

  const cancelar = async() => {
    limparFormulario()
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.getDate().toString().padStart(2, "0") + "/" + ((date.getMonth()+1).toString().padStart(2, "0"))  + "/" + date.getFullYear();
    console.log(formattedDate)
    setDataString(formattedDate)
    setFormInstrumento({...formInstrumento, datafabricacao:formattedDate})
    hideDatePicker();
  };

  const salvar = async() => {
    const instrumentoRefComId = instrumentoRef.doc();
    const instrumento= new Instrumento(formInstrumento);
    instrumento.id=instrumentoRefComId.id

    console.log(instrumento)
    instrumentoRefComId.set(instrumento.toFirestore()).then(() => {
         alert("Instrumento: " + instrumento.tipo + " Adicionado com Sucesso");
         console.log("Instrumento" + instrumento);
         console.log("Instrumento ToString: "+instrumento.toString())
         limparFormulario()
         });
    };
    
  
  return (
    <KeyboardAvoidingView 
    style={meuestilo.container}
    behavior="padding">
      <View style={meuestilo.inputContainer}>
        <TextInput
          placeholder="Tipo"
          value={formInstrumento.tipo}
          onChangeText={val => setFormInstrumento({ ...formInstrumento, tipo: val })}
          style={meuestilo.input}
        />
        <TextInput
          placeholder="Cor"
          value={formInstrumento.cor}
          onChangeText={val => setFormInstrumento({ ...formInstrumento, cor: val })}
          style={meuestilo.input}
        />

<Button title="Calendário" onPress={showDatePicker} />
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

<Text>Data de Fabricação:{dataString}</Text>
      </View>

      <View style={meuestilo.buttonContainer}>
        <TouchableOpacity onPress={cancelar} style={meuestilo.button}>
          <Text style={meuestilo.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={salvar}
          style={[meuestilo.button, meuestilo.buttonOutline]}
        >
          <Text style={meuestilo.buttonOutlineText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

    
  );
  
};

export default ManterInstrumento;

