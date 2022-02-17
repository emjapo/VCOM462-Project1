import defaultExport from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import TaskCollection from './TaskCollection';



async function updateTask(docID, name, goal, color) {
    await TaskCollection.doc(docID).update({
        name: name,
        goal: goal,
        color: color,
    }).then(() => {
        console.log('Task updated!');
    });
}


async function addTime(taskId, time) {
    // Create a reference to the post
    const taskReference = TaskCollection.doc(taskId);
    console.log("started adding time");
    return firestore().runTransaction(async transaction => {
        // Get post data first
        const taskSnapshot = await transaction.get(taskReference);
        console.log("Starting transaction...");
        if (!taskSnapshot.exists) {
            throw 'Tasks does not exist!';
        }

        transaction.update(taskReference, {
            totalMins: taskSnapshot.data().totalMins + time,
        });
    });
}

// addTime('tMmSwBkkSrfv33NyWVnM', 69)
//     .then(() => console.log('Post likes incremented via a transaction'))
//     .catch(error => console.error(error));

export { updateTask, addTime };