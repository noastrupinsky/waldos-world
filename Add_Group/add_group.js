
let submit_button = document.getElementById("submit_button");
let add_another_email = document.getElementById('add_email');

let email_list = [];
let length_emails = 1;




submit_button.onclick = function(){
let group_name = document.getElementById("group_name").value;

var db = firebase.firestore();

db.collection("groups").doc(group_name).set({
  
})
.then(function() {
    console.log("Document successfully written!");
    location.href = "https://us-central1-waldo-7996a.cloudfunctions.net/email"
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


};
