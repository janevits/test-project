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
export const getPromotions = () => (dispatch) => {
    // firebase.initializeApp(config);
    const arr = [];
    const database = firebase.database();
    dispatch({
        type: 'GET_PROMOTIONS_REQUEST',
        payload: []
    });
    // .list('/posts', { preserveSnapshot: true})
    return database.ref('/promotions').orderByChild('name').once('value').then(function(dataSnapshot) {
        dataSnapshot.forEach(function(item) {
            var itemVal = item.val();
            arr.push(itemVal);
        });
        dispatch({
            type: 'GET_PROMOTIONS_SUCCESS',
            payload: arr
        });
      })
};

