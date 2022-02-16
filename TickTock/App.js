import React, { Component } from 'react';
import { Form, FormItem } from 'react-native-form-component';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, ImageBackground, SafeAreaView, Alert, TextInput, onChangeText, TouchableOpacity  } from 'react-native';
import Task from './components/Task';
import AddTask from './components/AddTask';


export default class App extends Component {
    render() {
        return (
            <AddTask />
        )
    }
}


