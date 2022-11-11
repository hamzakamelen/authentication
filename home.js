 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { 
   getAuth,
   signOut,
   onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBQIt5fnShKXu3rzAwgBcExnBOwXMac4wc",
   authDomain: "todo16-bdfd6.firebaseapp.com",
   projectId: "todo16-bdfd6",
   storageBucket: "todo16-bdfd6.appspot.com",
   messagingSenderId: "942432581071",
   appId: "1:942432581071:web:37588db3a1bb582a144eba",
   measurementId: "G-3CPV8V44YG"
 };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const auth = getAuth()
window.logout = function(){
    signOut(auth)
    .then(function(){
        console.log("Logout Successfully")
        window.location.href = "login.html"
    })
}
var Inptask = document.getElementById('Inptask');
var listUL = document.getElementById('listUL');
var arr = []
function addTask(e){
    e.preventDefault()
    var object = {
        task : Inptask.value,
        date : `${new Date().getDate()}-${new Date().getMonth() + 1 }-${new Date().getFullYear()}`,
        time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        username : "Hamza"
    };
    arr.push(object);
    Inptask.value = ""
    listUl()
    console.log(arr)
}
function listUl(){
    listUL.innerHTML = ""
    for(var i=0; i < arr.length ; i++ ){
        listUL.innerHTML += `<li>${arr[i].task} 
        <span>${arr[i].date}</span>
        <span>${arr[i].time}</span>
        </li>`
    }
}
function checkAuthentication(){
onAuthStateChanged(auth, function (user) {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "login.html"
    }
  });
}
