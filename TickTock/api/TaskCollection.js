import defaultExport from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const TaskCollection = firestore().collection('Tasks');


export default TaskCollection;