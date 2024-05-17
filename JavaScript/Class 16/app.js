var firebaseConfig = {
  apiKey: "*******************************************",
  authDomain: "*************************",
  databaseURL: "***********************************",
  projectId: "*******************",
  storageBucket: "********************",
  messagingSenderId: "**********",
  appId: "******************************************",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var db = firebase.database();

// Data store in realtime database

// set()

function getVal() {
  var name = document.getElementById("name");
  var rollno = document.getElementById("rollno");

  var obj = {
    name: name.value,
    rollno: rollno.value,
  };

  // console.log(obj);

  firebase.database().ref(`users`).set(obj);
}

// push()

function getVal() {
  var name = document.getElementById("name");
  var rollno = document.getElementById("rollno");

  var obj = {
    name: name.value,
    rollno: rollno.value,
  };

  // console.log(obj);

  var key = Date.now().toString(31);

  // console.log(key);

  firebase.database().ref(`users/${key}`).set(obj);
}

// Get data from Database

// on()

function getDataFromDatabase() {
  firebase
    .database()
    .ref("users")
    .once("value", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();

// // once()

function getDataFromDatabase() {
  firebase
    .database()
    .ref("users")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();

// Delete data from database

function deleteDataFromDatabase() {
  firebase.database().ref("users").remove();
}

deleteDataFromDatabase();

// update data from database

function updateDataFromDatabase() {
  firebase.database().ref("users/20beh4d52").set({
    name: "faraz",
    rollno: 1000,
  });
}

updateDataFromDatabase();
