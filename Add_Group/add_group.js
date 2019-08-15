
let submit_button = document.getElementById("submit_button");
let add_another_email = document.getElementById('add_email');

let email_list = [];
let length_emails = 1;




submit_button.onclick = function(){
let group_name = document.getElementById("group_name").value;
let email = document.getElementById("emails").value;

var db = firebase.firestore();

db.collection("groups").doc(group_name).set({})
.then(function() {
    console.log("Document successfully written!");
    let link = "https://us-central1-waldo-7996a.cloudfunctions.net/email?" + "group_name=" + group_name +"&email=" + email;
    console.log(link);
    window.location.href = link
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


};
