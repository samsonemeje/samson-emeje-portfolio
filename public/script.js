

import { initializeApp } from "firebase/app";
const firebase =
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// UNIQUE FIREBASE OBJECT
const firebaseConfig = {
  apiKey: "AIzaSyAsxNxzGVP5e0n2enAva5qi23p80fBw69g",
  authDomain: "samsonemeje-8d698.firebaseapp.com",
  projectId: "samsonemeje-8d698",
  storageBucket: "samsonemeje-8d698.appspot.com",
  messagingSenderId: "40706934650",
  appId: "1:40706934650:web:ad52eaa4fa4fd1db9038c3",
  measurementId: "G-JQM9RKQXGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firebase 
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()


// variable to access database collection
const db =firestore.collection("portfolioContactForm");

// get submit form
let submitButton = getElementById('submit-btn')

// create event listener to allow form submission
submitButton.addEventListener("click", (e)=> {
  // prevent default form submission behavior
  e.preventDefault()

  // get form values
  let name = getElementById("name").value
  let subject = getElementById("subject").value
  let email = getElementById("email").value
  let message = getElementById("message").value

  // save form data to firebase
db.doc().set({
  name: name,
  subject: subject,
  email: email,
  message: message
}).then( ()=> {
  console.log("data saved")
}).catch( (error) => {
  console.log(error)
})
})






// theme change implementation
let theme = localStorage.getItem('theme')

if (theme == null) {
  setTheme('light')
} else {
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode
    console.log('option clicked:', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css'
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css'
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css'
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css'
  }

  localStorage.setItem('theme', mode)
}


