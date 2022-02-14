import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from './Task';
import TaskCollection from '../api/TaskCollection';
import firestore from '@react-native-firebase/firestore';


export default class TaskList extends Component {
     constructor() {
        super();
        this.state = {tasks : [{id:1, name:"test", goal:45}, {id:2, name:"Math", goal:20}]}
        this.getTasks();
        console.log("hello");
  }

  async getTasks() {
      console.log("before async");
    let tasksfromDB = await firestore().collection('Tasks').get(); 
    console.log("the tasks:", tasksfromDB);
    let newTasks = [];
    tasksfromDB.forEach(task => {
        console.log(task._data);
        newTasks.push(task._data);
    })

    this.setState({ tasks : newTasks });
  }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => <Task taskName={item.name} startStop={() => Alert()} elapsedTime={item.goal} />}
                />
            </View>
        );
    }
}