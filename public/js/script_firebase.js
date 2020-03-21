var config = {
    apiKey: "AIzaSyAQMLVAF1bTRKyMDRBDEZ9HtNF5342sTgo",
    authDomain: "boss-city.firebaseapp.com",
    databaseURL: "https://boss-city.firebaseio.com",
    projectId: "boss-city",
    storageBucket: "boss-city.appspot.com",
    messagingSenderId: "478259152046",
    appId: "1:478259152046:web:3bb04dc3b0ff971753d93f",
    measurementId: "G-MX7SBTM3Q6"
};

firebase.initializeApp(config);
firebase.analytics();

var ggProvider = new firebase.auth.GoogleAuthProvider();
var fbProvider = new firebase.auth.FacebookAuthProvider();

const btnGoogle = document.getElementById('btnGoogle');
const btnFacebook = document.getElementById('btnFacebook');

btnGoogle.addEventListener('click',()=>{
    firebase.auth().signInWithPopup(ggProvider).then((result)=>{
        var userData = {
            token : result.credential.accessToken,
            user : result.user,
            userId  : result.uid,
        }
        console.log(userData);
    }).catch((error)=>{
        console.log(error);
    })
},false);

btnFacebook.addEventListener('click',()=>{
    firebase.auth().signInWithPopup(fbProvider).then((result)=>{
        var userData = {
            token: result.credential.accessToken,
            user: result.user,
            userId: result.uid,
        }
        console.log(userData);
    }).catch((error)=>{
        console.log(error);
    })
},false);
