import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import defaultExport from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/firestore';
import {startTimer, addTime} from '../api/UpdateTask';
import TaskCollection from '../api/TaskCollection';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EditTask from './pages/EditTask';
import {useNavigation} from '@react-navigation/native';
import {Route} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';



// function GoToDetails({taskName, totalMins, elapsedTime, color, newtaskID}) {
//   const navigation = useNavigation();
//   const route = useRoute();
//   return (
//     <TouchableOpacity
//       onPress={() =>
//         navigation.navigate(EditTask, {
//           params: {taskID: newtaskID},
//         })
//       }
//       style={[styles.task, {backgroundColor: color}]}>
//       <View>
//         <Text style={styles.taskTitle}>{taskName}</Text>
//         <Text style={styles.ElapsedTime}>Goal Time: {elapsedTime}</Text>
//         <Text style={styles.ElapsedTime}>Total Time: {totalMins} minutes</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={() => Timer(newtaskID)}>
//         <Text style={styles.taskTime}>Start</Text>
//       </TouchableOpacity>
//       <View style={styles.taskGrippyGroup}>
//         <View style={styles.taskGrippyCol}>
//           <View style={styles.taskGrippy}></View>
//           <View style={styles.taskGrippy}></View>
//           <View style={styles.taskGrippy}></View>
//         </View>
//         <View style={styles.taskGrippyCol}>
//           <View style={styles.taskGrippy}></View>
//           <View style={styles.taskGrippy}></View>
//           <View style={styles.taskGrippy}></View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }

export default class Task extends Component {
  constructor() {
    super();
    this.state = {startedTasks: {}, startTime: 0};
  }
  static propTypes = {
    taskID: PropTypes.string,
    taskName: PropTypes.string,
    elaspsedTime: PropTypes.string,
    color: PropTypes.string,
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

  async Timer(taskID) {
    firestore()
      .collection('Tasks')
      .doc(taskID)
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
  }

  Stop = docID => {
    const newTime = new Date().getTime();
    let totalTime = newTime - this.state.startTime;
    let minutes = Math.floor(totalTime / 60000);
    console.log('Minutes: ', minutes);
    console.log('total time: ', totalTime);
    console.log('to Minutes: ', totalTime / 60000);
    addTime(docID, minutes);
    this.setState({startTime: 0});
  };

  Start = docID => {
    startTimer(docID);
    const newTime = new Date().getTime();
    this.setState({startTime: newTime});
  };
  

  render() {
    return (
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={[styles.task, {backgroundColor: this.props.color}]}
                onPress={() =>
                    navigation.navigate(EditTask, {
                        params: { taskID: this.props.taskID },
                    })
                }>
          <View>
            <Text style={styles.taskTitle}>{this.props.taskName}</Text>
                    <Text style={styles.ElapsedTime}>Goal Time: {this.props.elapsedTime} mins</Text>
                    <Text style={styles.ElapsedTime}>Total Time: {this.props.totalMins} mins</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.Timer(this.props.taskID)}>
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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  task: {
    // backgroundColor: "#F28B66",
    borderRadius: 5,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    paddingTop: 25,
  },
  ElapsedTime: {
    color: 'white',
    width: 180,
    paddingLeft: 5,
  },
  button: {
    borderRadius: 100,
    width: 80,
    height: 80,
    position: 'absolute',
    right: 50,
    marginTop: 8,
    backgroundColor: 'white',
  },
  taskGrippyGroup: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    width: '10%',
    height: '10%',
    position: 'absolute',
    right: 15,
  },
  taskGrippyCol: {
    paddingTop: 35,
    paddingLeft: 10,
    flexDirection: 'column',
    width: 15,
  },
  taskGrippy: {
    padding: 2,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    opacity: 0.3,
  },
});
