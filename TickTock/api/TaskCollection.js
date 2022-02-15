import defaultExport from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const TaskCollection = firestore().collection('Tasks');

firestore()
  .collection('Tasks')
  .add({
    name: 'Math',
    goal: 30,
  })
  .then(() => {
    console.log('User added!');
  });

  firestore()
  .collection('Tasks')
  .add({
    name: 'Research',
    goal: 20,
  })
  .then(() => {
    console.log('User added!');
  });

export default TaskCollection;