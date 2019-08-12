/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
 function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
           vars[key] = value;
      });
      return vars;
 }
 var group_name = getUrlVars()["group_name"];
 var test = getUrlVars()["?"];

 document.getElementById("group_name_variable").innerHTML= group_name;

let link = "contact_sheet/contact_sheet.html";
link = link + window.location.search;
document.getElementById("link").innerHTML= link;
