import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDu9UtZIdt0SmKZW-3gQvBtQ22Usr21EYM",
    authDomain: "bkp-project.firebaseapp.com",
    databaseURL: "https://bkp-project.firebaseio.com",
    projectId: "bkp-project",
    storageBucket: "bkp-project.appspot.com",
    messagingSenderId: "464649577867"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const getCooking = () => (dispatch) => {
    // firebase.initializeApp(config);
    const arr1 = [];
    const database = firebase.database();
    dispatch({
        type: 'GET_COOKING_REQUEST',
        payload: []
    });
    // .list('/posts', { preserveSnapshot: true})
    return database.ref('/cooking').once('value',(dataSnapshot) => {
        dataSnapshot.forEach(function(item) {
            var itemVal = item.val();
            arr1.push(itemVal);
        });
        dispatch({
            type: 'GET_COOKING_SUCCESS',
            payload: arr1
        });
      })
};