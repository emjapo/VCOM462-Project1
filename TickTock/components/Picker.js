import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Selections = () => {
    const [taskName, setTaskName] = useState('Research');
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