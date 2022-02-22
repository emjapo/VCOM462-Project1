import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

async function getTasks() {

    firestore()
        .collection('Tasks')
        .get()
        .then(querySnapshot => {
            console.log('Total tasks: ', querySnapshot.size);
            let newTasks = [];
            querySnapshot.forEach(documentSnapshot => {
                console.log('Tasks: ', documentSnapshot.id, documentSnapshot.data());
                newTasks.push([{ id: documentSnapshot.id }, documentSnapshot.data()]);
            });
            return newTasks;
        });
}

const Selections = () => {
    const [taskName, setTaskName] = useState('Research');
    let tasks = getTasks();
    console.log(tasks);
    return (
        <View >
            <View>
                <Picker
                    mode='dropdown'
                    selectedValue={taskName}
                    onValueChange={newtaskName => setTaskName(newtaskName)}>
                    <Picker.Item label="Research" value="Research" />
                    <Picker.Item label="Coding" value="Coding" />
                    <Picker.Item label="Teaching" value="Teaching" />
                </Picker>
                <Text>
                    Selected: {taskName}
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    //Check project repo for styles
});

export default Selections;