import React from "react";
import { TextInput,StyleSheet } from "react-native";

const InputForms= ({placeholder, value, onChangeText, secureTextEntry}) =>{
  return(
    <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    style={style.input}
  
    />
  );
};

const style = StyleSheet.create({
    input:{
        borderColor: "#CFCFD3",
        borderWidth: 1,
        height: 68,
        padding: 14,
        borderRadius: 8,
        fontSize: 18,
    }
});

export default InputForms;