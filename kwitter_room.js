
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCNb78ldWLie-2sRR0V7z0y3uJtt66BJU",
  authDomain: "lets-chat-web-app-a640b.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-a640b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-a640b",
  storageBucket: "lets-chat-web-app-a640b.appspot.com",
  messagingSenderId: "461724403740",
  appId: "1:461724403740:web:8a4f27ab288187600e37d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; 
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

    });
  });
}
 getData();

 function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
 }