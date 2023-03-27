import { useState } from "react";
import { View , Text, Button , StyleSheet , Pressable } from "react-native";

const App = ()=>{

  const [BgColor , setBgColor] = useState(`rgb(125 , 0 , 255)`);

  const onPressHandler = ()=>{
    let randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    setBgColor(randomColor);
  }

  const ResetHandler = ()=>{
    setBgColor(`rgb(0,0,0)`);
  }

  return <View style={[styles.container , {backgroundColor : BgColor}]}>
    <Text style={{
      padding : 10 ,
      fontSize : 20 ,
      color : "white"
    }}>Background Color Changer</Text>
    <Button title="CLick Me" onPress={onPressHandler} />
    <Pressable onPress={ResetHandler}><Text style={styles.btn}>RESET</Text></Pressable>
  </View>

}

export default App;

const styles = StyleSheet.create({
  container : {
    flex:1 ,
    justifyContent : "center" ,
    alignItems : "center" ,
    backgroundColor:'rgb(125 , 0 , 255)'
  } ,
  btn : {
    margin : 5 ,
    padding : 10 ,
    backgroundColor : "black" ,
    color : "white"
  }
})