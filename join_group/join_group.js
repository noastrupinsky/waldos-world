// alert("hey");

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var number = getUrlVars()["group_name"];

console.log(number);
document.getElementById("variable").innerHTML=number;


let email_user;
let insta_user;
let snap_user;
let link_user;
let twitter_user;

var email_check = document.getElementById("email_check");
var insta_check = document.getElementById('insta_check')
var snap_check = document.getElementById('snap_check');
var link_check = document.getElementById('link_check');
var titter_check = document.getElementById('twitter_check');


var button = document.getElementById('test');

let link = "/Users/noa.strupinsky/blue_pages/public/home.html?";



button.onclick = function(){
  var name = document.getElementById('name').value;
  link = link + "name=" + name;

  if (email_check.checked == true) {
    email_user = document.getElementById('email_user').value;
    console.log(email_user);
    link = link +  "&" + "email_user=" + email_user;
  }

  if (insta_check.checked == true) {
    insta_user = document.getElementById('insta_user').value;
      console.log(insta_user);
      link = link + "&" + "insta_user=" + insta_user;
  }
  if (snap_check.checked == true) {
    snap_user = document.getElementById('snap_user').value;
      console.log(snap_user);
      link = link + "&" +  "snap_user=" + snap_user;
  }
  if (link_check.checked == true) {
    link_user = document.getElementById('link_user').value;
      console.log(link_user);
      link = link + "&" +  "link_user=" + link_user;
  }
  if (twitter_check.checked == true) {
    twitter_user = document.getElementById('twitter_user').value;
      console.log(twitter_user);
      link = link + "&" + "twitter_user=" + twitter_user;
  }


   location.href = link;
}
