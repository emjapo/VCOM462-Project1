import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, ImageBackground, Alert, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';



export default class Task extends Component {
    static propTypes = {
        taskName: PropTypes.string,
        startStop: PropTypes.func,
        elaspsedTime: PropTypes.string,
    };

    render() {
        return(
             <ImageBackground source={require('../img/grid.png')}style={styles.image}>
            <View style={styles.taskContainer}>
                <View style={styles.task}>
                    <View>
                    <Text style={styles.taskTitle}>{this.props.taskName}</Text>
                    <Text style={styles.ElapsedTime}>{this.props.elapsedTime}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.props.startStop}  >
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
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",

    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F0E9'
     },
    task: {
        backgroundColor: "#F28B66",
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