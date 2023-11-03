import React,{useRef} from "react";
import   BottomSheet,{ BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import "react-native-gesture-handler";
import { View, Text, Button, StyleSheet } from "react-native";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


 function Teste(){
    const bottomSheetRef = useRef<BottomSheet>(null);
     

    return<>
    <BottomSheetModalProvider>
    <View style={style.container}>
         <Button title="Abrir o ngc" onPress={() => {
            bottomSheetRef.current?.expand();
         }} />
    <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={[1, '40%', '80%']}
        handleIndicatorStyle={{
          height: 9,
          backgroundColor: "#D9D9D9",
          width: "20%",
        }}>
            <View>
                <Text>
                    Carros
                </Text>
            </View>
      </BottomSheet>
    </View>
    </BottomSheetModalProvider>
    
   
    </>
    
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"gray"
    }
})
export default gestureHandlerRootHOC(Teste);