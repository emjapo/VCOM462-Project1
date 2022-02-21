import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from './Task';
import TaskCollection from '../api/TaskCollection';
import firestore from '@react-native-firebase/firestore';



export default class TaskList extends Component {
     constructor() {
        super();
        this.state = {tasks : []}
        this.getTasks();
        console.log("hello");
  }

  // gets data from Database
  async getTasks() {

    firestore()
        .collection('Tasks')
        .get()
        .then(querySnapshot => {
            console.log('Total tasks: ', querySnapshot.size);
            let newTasks = [];
            querySnapshot.forEach(documentSnapshot => {
            console.log('Tasks: ', documentSnapshot.id, documentSnapshot.data());
            newTasks.push([{id: documentSnapshot.id}, documentSnapshot.data()]);
            });
            this.setState({ tasks : newTasks });
            // console.log(this.state.tasks);
        });
  }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => <Task taskID={item[0].id} taskName={item[1].name} elapsedTime={item[1].goal} color={item[1].color} />}
                    // renderItem={({ item }) => console.log(item[0].id)}
                />
            </View>
        );
    }
}