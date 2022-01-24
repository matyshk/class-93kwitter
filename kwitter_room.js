
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBrVSKT7Dq6XEwMtjJlveOBh23CJDRazxs",
      authDomain: "class-test-556d0.firebaseapp.com",
      databaseURL: "https://class-test-556d0-default-rtdb.firebaseio.com",
      projectId: "class-test-556d0",
      storageBucket: "class-test-556d0.appspot.com",
      messagingSenderId: "757512865752",
      appId: "1:757512865752:web:d6fefd484c30cd401514ad"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
