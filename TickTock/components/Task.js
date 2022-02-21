import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';
import { startTimer, addTime } from '../api/UpdateTask';




export default class Task extends Component {
    constructor(){
        super();
        this.state = {startedTasks: {}, startTime:0 }
    }
    static propTypes = {
        taskID: PropTypes.string,
        taskName: PropTypes.string,
        elaspsedTime: PropTypes.string,
        color: PropTypes.string
    };


    // async getTasks() {

    //     firestore()
    //         .collection('Tasks')
    //         .where('start')
    //         .get()
    //         .then(querySnapshot => {
    //             console.log('Started tasks: ', querySnapshot.size);
    //             let newTasks = [];
    //             querySnapshot.forEach(documentSnapshot => {
    //                 console.log('Tasks: ', documentSnapshot.id, documentSnapshot.data());
    //                 newTasks.push(documentSnapshot.id);
    //             });
    //             this.setState({ startedTasks: newTasks });
    //         });
    // }

    async Timer() {

        firestore()
            .collection('Tasks')
            .doc(this.props.taskID)
            .get()
            .then(documentSnapshot => {
                console.log('User exists: ', documentSnapshot.exists);
                console.log(documentSnapshot);
                if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    if (documentSnapshot.data().hasOwnProperty('start')) {
                        this.Stop(documentSnapshot.id);
                    } else {
                        this.Start(documentSnapshot.id);
                    }
                }
            });
        
        // if (this.state.startedTasks.length == 0){
        //     startTimer(this.state.startedTasks[0]);
        //     let time = new Date.now();
        //     this.setState({startTime: time})
        // } else {
        //     let newTime = new Date.now();
        //     let totalTime = newTime - this.state.startTime;
        //     let minutes = Math.floor(totalTime / 60000);
        //     addTime(this.state.startedTasks[0], minutes);
        //     this.setState({startTime: 0});
        // }

    }

    Stop(docID) {
        let newTime = new Date.now();
        let totalTime = newTime - this.state.startTime;
        let minutes = Math.floor(totalTime / 60000);
        addTime(docID, minutes);
        this.setState({ startTime: 0 });
    }


    Start(docID) {
        startTimer(docID);
        let time = new Date.now();
        this.setState({ startTime: time })
    }


    render() {
        return(
            <View style={styles.taskContainer}>
                <View style={[styles.task, {backgroundColor: this.props.color}]}>
                    <View>
                    <Text style={styles.taskTitle}>{this.props.taskName}</Text>
                    <Text style={styles.ElapsedTime}>{this.props.elapsedTime}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.Timer}  >
                        <Text style={styles.taskTime}>Start</Text>
                    </TouchableOpacity>

                    <View style={styles.taskGrippyGroup}>
                        <View style={styles.taskGrippyCol}>
                            <View style={styles.taskGrippy}></View>
                            <View style={styles.taskGrippy}></View>
                            <View style={styles.taskGrippy}></View>
                        </View>
                        <View style={styles.taskGrippyCol}>
                            <View style={styles.taskGrippy}></View>
                            <View style={styles.taskGrippy}></View>
                            <View style={styles.taskGrippy}></View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",

    },
    task: {
        // backgroundColor: "#F28B66",
        borderRadius: 5,
        width: "100%",
        height: 100,
        flexDirection: 'row',
        flexWrap: "wrap",
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }, 
    taskTitle: {
        fontSize: 30,
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white',

    },
    taskTime: {
        color: '#466874',
        width: 100,
        fontSize: 20,
        paddingLeft: 17,
        paddingTop: 25

    },
    ElapsedTime: {
        color: 'white',
        width: 100,
        paddingLeft: 5
    },
    button: {

        borderRadius: 100,
        width: 80,
        height: 80,
        marginLeft: 50,
        marginTop: 5,
        backgroundColor: "white",

    },
    taskGrippyGroup: {

        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        width: "10%",
        height: "10%"
    },
    taskGrippyCol: {
        paddingTop: 30,
        paddingLeft: 10,
        flexDirection: 'column',
        width: 15,

    },
    taskGrippy: {
        padding: 2,
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#F2724F",
    },
})