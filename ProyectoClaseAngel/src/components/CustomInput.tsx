import { TextInput, View, Text, StyleSheet, TouchableOpacity, KeyboardTypeOptions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type Props ={
    placeholder: string,
    onChange: (text: string) => void,
    value: string;
    typeInput: 'password' | 'email' | 'numeric' | 'text';
    
}
export default function CustomInput ({placeholder, onChange, value, typeInput}:Props){
//uso de variables en el estado local
//        sintaxis
//        [nombre de variable , funcion] = useState(siempre valor inicial)
    const [isSecureText, setIsSecureText] = useState(typeInput === 'password');
    const isPasswordField = typeInput === 'password'   // esto es un comportamiento condicionado
    
    const icon : typeof MaterialIcons["name"]|undefined =
        typeInput === "email" ? "email" : 
        typeInput === "password" ? "lock" : undefined
    
    const keyboardType: KeyboardTypeOptions 
    typeInput === "email" ? "email-address" :
           typeInput === "number" ? "numeric" : "default"   

    const getError = () =>{
        if (typeInput === "email" && !value.includes('@')) 
            return 'Correo Invalido';
        if (typeInput === "password" && value.length < 6)
            return 'La contraseña debe ser mas fuerte';
    };

    const error = getError();
        
    return(
        //wrapper
        <View style={styles.wrapper}>
            {/* //inputContainer */}
            <View style={styles.inputContainer}>
                <MaterialIcons 
                    name={icon}
                    size={20}
                    color={"#000000"}
                />
            <TextInput
            style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={isSecureText}
                keyboardType= {keyboardType}
            />

           {isPasswordField && 
           <TouchableOpacity onPress={()=>{setIsSecureText(!isSecureText)}}>
            <Ionicons name={isSecureText ? "eye" : "eye-off"} size={20} /> 
            </TouchableOpacity>
            }
            </View>
           {error && <Text> {error} </Text> }
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
    },
    input: {
        paddingHorizontal: 10,
        width: "80%"
    }
});