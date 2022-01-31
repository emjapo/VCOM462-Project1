import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Alert, Platform } from 'react-native';

export default class Clock extends Component {

    constructor() {
        super();

        this.state = { currentTime: null, currentDay: null }
        this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    }

    componentWillMount() {
        this.getCurrentTime();
    }

    getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = "pm";

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (hours > 12) {
            hour = hour - 12;
        }

        if (hour == 0) {
            hour = 12;
        }

        if(new Date().getHours < 12) {
            am_pm = "am";
        }

        this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm});

        this.daysArray.map((item, key) => {
            if (key == new Date().getDay()) {
                this.setState({ currentDay: item.toUpperCase() });
            }
        })
    }

    UNSAFE_componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    }

    render() {
        return (
            <View style={StyleSheet.clock}>
                <Text style={styles.daysText}>{this.state.currentDay}</Text>
                <Text style={styles.timeText}>{this.state.currentTime}</Text>
            </View>
        )
    }
}

