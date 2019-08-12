function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var group_name = getUrlVars()["group_name"];
var email_user = getUrlVars()["email_user"];
email_user = "Email: " + email_user;

var insta_user = getUrlVars()["insta_user"];
insta_user = "Instagram: " + insta_user;

var snap_user = getUrlVars()["snap_user"];
snap_user = "Snapchat: " + snap_user;

var link_user = getUrlVars()["link_user"];
link_user = "Linkdin: " + link_user;

var twitter_user = getUrlVars()["twitter_user"];
twitter_user = "Twitter: " + twitter_user;

var name = getUrlVars()["name"];
document.getElementById("group_name").innerHTML=group_name;
document.getElementById("name").innerHTML=name;
document.getElementById("email_user").innerHTML=email_user;
document.getElementById("insta_user").innerHTML=insta_user;
document.getElementById("snap_user").innerHTML=snap_user;
document.getElementById("link_user").innerHTML=link_user;
document.getElementById("twitter_user").innerHTML=twitter_user;

let link =  '../../home.html' + window.location.search;
document.getElementById("home").innerHTML = link;
