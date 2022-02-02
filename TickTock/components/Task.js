import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';


export default class Task extends Component {
    static propTypes = {
        taskName: PropTypes.string,
        startStop: PropTypes.func,
        elaspsedTime: PropTypes.string,
    };

    render() {
        return(
            <View className="task">
                <Text className='task-title'>{this.props.taskName}</Text>
                <Text className='task-time'>{this.props.elapsedTime}</Text>
                <Button title='' onPress={this.props.startStop}></Button>
            </View>
        )
    }
}