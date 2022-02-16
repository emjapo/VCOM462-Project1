import defaultExport from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import TaskCollection from './TaskCollection';


 
async function addTask(name, goal, color) {
    await TaskCollection.add({
        name: name,
        goal: goal,
        color: color, 
        totalMins: 0,
    }).then(() => {
    console.log('Task added!');
  });
}

export default addTask;
