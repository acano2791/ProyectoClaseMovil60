import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type Props ={
    placeholder: string,
    onChange: () => void,
    value: string;
    typeInput: 'password' | 'email' | 'numeric' | 'text';
    
}
export default function CustomInput ({placeholder, onChange, value, typeInput}:Props){
//uso de variables en el estado local
//        sintaxis
//        [nombre de variable , funcion] = useState(siempre valor inicial)
    const [isSecureText, setIsSecureText] = useState(typeInput === 'password');
    
    return(
        //Wrapper
        <View style={styles.wrapper} >
            {/*InputContainer */}
            <View style ={styles.inputContainer}>
            <MaterialIcons
                name={"lock"}
                size={20}
                color={"#000000"}
            />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={isSecureText}
            />
            <TouchableOpacity
                onPress={
                    ()=>{

                    }
                }>
            <Ionicons name={"eye"} size={20} />
            </TouchableOpacity>            
            </View>
            <Text> *Campo Requerido </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        marginBottom:10,
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "blue"
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "space-between",
        
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 13,
        paddingVertical: 5
    }
});