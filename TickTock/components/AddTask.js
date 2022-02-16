import React, { Component } from 'react';
import { Form, FormItem } from 'react-native-form-component';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, ImageBackground, SafeAreaView, Alert, TextInput, onChangeText, TouchableOpacity  } from 'react-native';
import Task from './Task';



const AddTask = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    return (
      <ImageBackground source={require('./../img/grid.png')}style={styles.image}>
      <View style={styles.container}>
        <View>
            <TextInput

                      // Adding hint in Text Input using Place holder.
                      placeholder="Task Name"

                      onChangeText={TextInputName => this.setState({TextInputName})}



                      style={styles.input}
                    />

                    <TextInput

                      // Adding hint in Text Input using Place holder.
                      placeholder="Goal Time"

                      onChangeText={TextInputEmail => this.setState({TextInputEmail})}

                      keyboardType= "numeric"

                      style={styles.input}
                    />
                      <View style={styles.color}>
                       <Text style={styles.text}>
                       Color </Text>
                      <View style={styles.ColorButtonsTop}>
                        <TouchableOpacity style={styles.orange}
                                  onPress={() => Alert.alert('(I am a Button)')}>

                         </TouchableOpacity>
                          <TouchableOpacity style={styles.orange}
                                  onPress={() => Alert.alert('(I am a Button)')}>

                          </TouchableOpacity>

                          <TouchableOpacity style={styles.orange}
                                   onPress={() => Alert.alert('(I am a Button)')}>

                                    </TouchableOpacity>
                           </View>
                           <View style={styles.ColorButtonsBot}>
                          <TouchableOpacity style={styles.orange}
                                     onPress={() => Alert.alert('(I am a Button)')}>

                                     </TouchableOpacity>
                          <TouchableOpacity style={styles.orange}
                                     onPress={() => Alert.alert('(I am a Button)')}>

                                     </TouchableOpacity>
                          <TouchableOpacity style={styles.orange}
                                     onPress={() => Alert.alert('(I am a Button)')}>

                                     </TouchableOpacity>



                      </View>


                    </View>

                    <Button title="Insert Text Input Data to Server" onPress={() => Alert.alert('(I am Dying)')} color="#2196F3" />



        </View>
      </View>
      </ImageBackground>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 32,
  },
  ColorButtonsTop: {
    backgroundColor: "white",
    margin: "10%",
    padding: "10%",
    flexDirection: "row",
    justifyContent: "center"

    },
  ColorButtonsBot: {
    backgroundColor: "white",

     flexDirection: "row"

        },
   orange: {
    backgroundColor: '#F2724F',
    width:80,
    height:80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
   },
  text: {
    fontFamily: "sans-serif",
    fontSize: 18,
    color: "gray",
  },
  form: {
   color: "black"
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'black',
    fontWeight: "bold"
  },
    image: {
    width: '100%',
    height: '100%',
    backgroundColor: "#F3F0E9",

    },
    input: {
    color: "white",
    backgroundColor: "#B0C7D9",
    margin: "5%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
    },


});
export default AddTask;