import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform, Button, ImageBackground, SafeAreaView, Alert, TextInput, onChangeText, TouchableOpacity  } from 'react-native';
import AddTask from './components/AddTask';
import Task from './components/Task';
import TaskCollection from './api/TaskCollection';

import firestore from '@react-native-firebase/firestore';
import TaskList from './components/TaskList';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function AboutScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

function MyStack ()  {
	return(
		<Stack.Navigator>
			<Stack.Screen name="About" component={AboutScreen} />
		</Stack.Navigator>
	);
 }



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
  console.log("stop")
    let stopDate = new Date();
    this.setState({ stopTime: { hours: stopDate.getHours(), minutes: stopDate.getMinutes(), seconds: stopDate.getSeconds() } }, () => {
      Alert.alert('It has been ' + (this.state.stopTime.hours - this.state.startTime.hours) + ':' + (this.state.stopTime.minutes - this.state.startTime.minutes) + ':' + (this.state.stopTime.seconds - this.state.startTime.seconds));
    });
  }
  

	
	

  render() {

    return (	
      <ImageBackground source={require('./img/grid.png')}style={styles.image}>
	  <NavigationContainer>
		<MyStack/>
	 </NavigationContainer>
      <View style={styles.container}>
        <View>
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>
          {/* <Button title='Start' onPress={() => this.startTime()} />
          <Button title='Stop' onPress={() => this.stopTime()} /> */}
          <TaskList />
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F0E9',
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
    color: '#466874'
  },
  daysText: {
    color: '#986D4D',
    fontSize: 25,
    paddingBottom: 0
  },
  image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F0E9'
     },
})


