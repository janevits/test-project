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

export const getProductListSearch = () => (dispatch) => {
    // firebase.initializeApp(config);
    const database = firebase.database();
    const arr = [];
    dispatch({
        type: 'GET_PRODUCT_LIST_SEARCH_REQUEST',
        payload: []
    });

    return database.ref('/product').orderByChild("productName").once('value').then(function(dataSnapshot) {
        dataSnapshot.forEach(function(item) {
            var itemVal = item.val();
            arr.push(itemVal);
        });
        dispatch({
            type: 'GET_PRODUCT_LIST_SEARCH_SUCCESS',
            payload: arr
        });
      })
  };