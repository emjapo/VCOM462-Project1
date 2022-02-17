import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from './Task';
import TaskCollection from '../api/TaskCollection';
import firestore from '@react-native-firebase/firestore';
import addTask from '../api/AddTaskToDB';


export default class TaskList extends Component {
     constructor() {
        super();
        this.state = {tasks : [{id:1, name:"test", goal:45}, {id:2, name:"Math", goal:20}]}
        this.getTasks();
        console.log("hello");
  }

  // gets data from Database
  async getTasks() {
      // addTask("Recess", 75, "#F28B66");
    // useEffect(() => {
    //     const subscriber = firestore()
    firestore()
        .collection('Tasks')
        .get()
        .then(querySnapshot => {
            console.log('Total tasks: ', querySnapshot.size);
            let newTasks = [];
            querySnapshot.forEach(documentSnapshot => {
            console.log('Tasks: ', documentSnapshot.id, documentSnapshot.data());
            newTasks.push(documentSnapshot.data());
            });
            this.setState({ tasks : newTasks });
        });
    //     return () => subscriber();
    // }, [userId]);
  }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => <Task taskName={item.name} startStop={() => console.log("start time")} elapsedTime={item.goal} color={item.color} />}
                />
            </View>
        );
    }
}