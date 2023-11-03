import react from "react";
import { StyleSheet, View, Text, Image,TextInput} from "react-native";

export default function Header(){
   return <>
   <View style={style.width}>
    <Text style={style.text}> Boas Vindas, User  </Text>
    <Image style={style.Image} source={require('../../../../assets/config.png')}
      />
   </View>
   </>
}
const style = StyleSheet.create({
    width:{
        flexDirection: "row",
        width:"100%",
        padding : 20,
        justifyContent: "space-between",
    },
    text:{
        color: "#262A2C",
        fontSize: 18,
        fontFamily: "InterBold",
        lineHeight: 27,
    },
    Image:{
     marginLeft: 18,
    }
});