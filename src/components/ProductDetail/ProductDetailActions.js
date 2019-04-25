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
// firebase.initializeApp(config);

export const getProductDetail = (productId) => (dispatch) => {
    // firebase.initializeApp(config);
    const database = firebase.database();
    dispatch({
        type: 'GET_PRODUCT_DETAIL_REQUEST',
        payload: 'requesting'
    });
    return database.ref('/product').orderByChild("productId").equalTo(parseInt(productId)).once('value').then(function(dataSnapshot) {
        dispatch({
            type: 'GET_PRODUCT_DETAIL_SUCCESS',
            payload: dataSnapshot.val()
        });
      })
  };