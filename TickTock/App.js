import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, Alert } from 'react-native';
import Appstyles from './styles/main.scss';
import { NavigationContainer } from '@react-navigation/native';
import Task from './components/Task';

export default class App extends Component {

  constructor() {
    super();

    this.state = { currentTime: null, currentDay: null, startTime: { hours: null, minutes: null, seconds: null }, stopTime: { hours: null, minutes: null, seconds: null} }
    this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  }

  componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  startTime() {
    let date = new Date();
    this.setState({ startTime: { hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() } }, () => {
      Alert.alert('start time: ' + this.state.startTime.hours + ":" + this.state.startTime.minutes + ":" + this.state.startTime.seconds);
    });
  }

  stopTime() {
    let stopDate = new Date();
    this.setState({ stopTime: { hours: stopDate.getHours(), minutes: stopDate.getMinutes(), seconds: stopDate.getSeconds() } }, () => {
      Alert.alert('It has been ' + (this.state.stopTime.hours - this.state.startTime.hours) + ':' + (this.state.stopTime.minutes - this.state.startTime.minutes) + ':' + (this.state.stopTime.seconds - this.state.startTime.seconds));
    });
  }

  render() {

    return (
      <NavigationContainer>
        <View style={styles.container}>
          <View>
            <Text style={styles.daysText}>{this.state.currentDay}</Text>
            <Text style={styles.timeText}>{this.state.currentTime}</Text>
            {/* <Button title='Start' onPress={() => this.startTime()} />
            <Button title='Stop' onPress={() => this.stopTime()} /> */}
            <Task taskName='Homework' startStop={() => this.stopTime()} elapsedTime='54 min' />
          </View>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 32,
  },
  bodyText: {
    fontFamily: "sans-serif",
    fontSize: 32,
    color: "white",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'black',
    fontWeight: "bold"
  },
  timeText: {
    fontSize: 50,
    color: '#ffffff'
  },
  daysText: {
    color: '#cccccc',
    fontSize: 25,
    paddingBottom: 0
  }
  
})


