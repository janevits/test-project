import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDu9UtZIdt0SmKZW-3gQvBtQ22Usr21EYM",
    authDomain: "bkp-project.firebaseapp.com",
    databaseURL: "https://bkp-project.firebaseio.com",
    projectId: "bkp-project",
    storageBucket: "bkp-project.appspot.com",
    messagingSenderId: "464649577867"
  };
firebase.initializeApp(config);

export const getCategory = () => (dispatch) => {
    // firebase.initializeApp(config);
    const arr = [];
    const database = firebase.database();
    dispatch({
        type: 'GET_CATEGORY_REQUEST',
        payload: []
    });
    // .list('/posts', { preserveSnapshot: true})
    return database.ref('/categories').orderByPriority().once('value',(dataSnapshot) => {
        dataSnapshot.forEach(function(item) {
            var itemVal = item.val();
            arr.push(itemVal);
        });
        dispatch({
            type: 'GET_CATEGORY_SUCCESS',
            payload: arr
        });
      })
};

export const getProductList = (category) => (dispatch) => {
    // firebase.initializeApp(config);
    const database = firebase.database();
    const arr = [];
    dispatch({
        type: 'GET_PRODUCT_LIST_REQUEST',
        payload: []
    });
    return database.ref('/product').orderByChild("category").equalTo(category).once('value').then(function(dataSnapshot) {
        dataSnapshot.forEach(function(item) {
            var itemVal = item.val();
            arr.push(itemVal);
        });
        dispatch({
            type: 'GET_PRODUCT_LIST_SUCCESS',
            payload: arr
        });
      })
  };