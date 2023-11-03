import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import { shadow } from "react-native-paper";



const Step = ({ children, active}) =>{
    return (
        <View style={style.circle}>
          <View style={{
             backgroundColor:  active ? "#FFFFFF":"#BFBFBF" ,
             width: 27,
             height: 27,
             borderRadius: 16,
             elevation: 4,
             borderWidth:  active ? 5 : 0 ,
             borderColor:"#21CA83",
             alignItems:"center"
          }} >
            <Text style={{ 
                   
                    fontFamily:"RobotoBold",
                fontSize: active ? 2 : 18 ,
                   lineHeight: 23,
              color: "white",
       }}>{children}</Text>
          </View>
        </View>
    );
};
const style = StyleSheet.create({
    circle:{
     borderRadius: 50,
     width: 40,
     height: 40,
     backgroundColor:"#F0F0F0",
     elevation: 4,
     alignItems:"center",
     justifyContent:"center",
    },

})

export default Step;