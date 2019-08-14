// alert("hey");

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var group_name = getUrlVars()["group_name"];

console.log(name);
document.getElementById("variable").innerHTML=group_name;


var button = document.getElementById('test');

let link = "../home.html";


button.onclick = function(){

var db = firebase.firestore();

var groupRef = db.collection("groups");
var  rbc = groupRef.doc(group_name);
rbc.collection('users').doc(document.getElementById('name').value).set({
    name: document.getElementById('name').value,
    email: document.getElementById('email_user').value,
    insta: document.getElementById('insta_user').value,
    twit: document.getElementById('twitter_user').value,
    snap: document.getElementById('snap_user').value,
    link: document.getElementById('link_user').value,
})
.then(function() {
    console.log("Document successfully written!");
    location.href = link;
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});



}
