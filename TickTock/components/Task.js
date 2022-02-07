import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


export default class Task extends Component {
    static propTypes = {
        taskName: PropTypes.string,
        startStop: PropTypes.func,
        elaspsedTime: PropTypes.string,
    };

    render() {
        return(
            <View style={styles.taskContainer}>
                <View style={styles.task}>
                    <View>
                    <Text style={styles.taskTitle}>{this.props.taskName}</Text>
                    <Text style={styles.taskTime}>{this.props.elapsedTime}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.props.startStop}>
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
        backgroundColor: "red",
        borderRadius: 5,
        width: "80%",
        height: 200,
        flexDirection: 'row',
        flexWrap: "wrap",
    }, 
    taskTitle: {
        fontWeight: "bold",

    },
    taskTime: {
        width: 100,

    },
    button: {
        width: 40,
        backgroundColor: "yellow",
        flex: 2,
    },
    taskGrippyGroup: {
        backgroundColor: "pink",
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        width: "20%"
    },
    taskGrippyCol: {
        width: 22,
        backgroundColor: "green",
    },
    taskGrippy: {
        padding: 2,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "blue",
    },
})