import React, {Component} from 'react';
import {Form, FormItem} from 'react-native-form-component';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  ImageBackground,
  SafeAreaView,
  Alert,
  TextInput,
  onChangeText,
  TouchableOpacity,
} from 'react-native';
import Task from './Task';
import {Picker} from '@react-native-picker/picker';
import {useForm, Controller} from 'react-hook-form';
import addTask from '../api/AddTaskToDB';


const AddTask = () => {
  const [taskColor, setColor] = React.useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      taskName: '',
      goal: '',
    },
  });
  const onSubmit = data => {addTask(data.taskName, data.goal, taskColor.taskColor);
  navigation.navigate('TaskHome');}

  return (
    <ImageBackground source={require('./../img/grid.png')} style={styles.image}>
      <View style={styles.container}>
        <View>
          {/* <View>
            <Picker
              mode='dropdown'
              selectedValue={taskName}
              onValueChange={taskName => setTaskName(taskName)}>
              <Picker.Item label="Research" value="Research" />
              <Picker.Item label="Coding" value="Coding" />
              <Picker.Item label="Teaching" value="Teaching" />
            </Picker>
            <Text>
              Selected: {taskName}
            </Text>
          </View> */}
          {/* <TextInput
            // Adding hint in Text Input using Place holder.
            placeholder="Other"
            onChangeText={TextInputName => setOther({TextInputName})}
            style={styles.input}
          /> */}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 30,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Task Name"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="taskName"
          />
          {errors.taskName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              required: true,
              min: 5,
              pattern: /[0-9]+/,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Goal Time"
                keyboardType="numeric"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="goal"
          />
          {errors.goal && <Text>A number is required.</Text>}

          <View style={styles.color}>
            <Text style={styles.text}>Color </Text>
            <View style={styles.ColorButtonsTop}>
              <TouchableOpacity
                style={styles.orange}
                onPress={() => 
                  setColor({taskColor: "#F2724F"})
                }></TouchableOpacity>
              <TouchableOpacity
                style={styles.yellow}
                onPress={() =>
                  setColor({taskColor: '#F1C48D'})
                }></TouchableOpacity>
              <TouchableOpacity
                style={styles.blue}
                onPress={() =>
                  setColor({taskColor: '#B0C7D9'})
                }></TouchableOpacity>
            </View>
            <View style={styles.ColorButtonsBot}>
              <TouchableOpacity
                style={styles.DarkBlue}
                onPress={() =>
                  setColor({taskColor: '#466874'})
                }></TouchableOpacity>
              <TouchableOpacity
                style={styles.mint}
                onPress={() =>
                  setColor({taskColor: '#B8D9C6'})
                }></TouchableOpacity>
              <TouchableOpacity
                style={styles.DarkGreen}
                onPress={() =>
                  setColor({taskColor: '#61756C'})
                }></TouchableOpacity>
            </View>
          </View>

          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            color="#466874"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 32,
  },

  ColorButtonsTop: {
    backgroundColor: 'white',
    margin: '10%',
    padding: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ColorButtonsBot: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '10%',
    marginTop: '-20%',
    paddingBottom: '10%',
  },
  orange: {
    backgroundColor: '#F2724F',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  yellow: {
    backgroundColor: '#F1C48D',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  blue: {
    backgroundColor: '#B0C7D9',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  DarkBlue: {
    backgroundColor: '#466874',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  mint: {
    backgroundColor: '#B8D9C6',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  DarkGreen: {
    backgroundColor: '#61756C',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },

  text: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    color: 'gray',
  },
  form: {
    color: 'black',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F0E9',
  },
  input: {
    color: 'white',
    backgroundColor: '#B0C7D9',
    margin: '5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  hidden: {
    display: 'none',
  },
});
export default AddTask;
