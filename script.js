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
 console.log(group_name);




var db = firebase.firestore();
db.collection("groups").get().then(
  function(querySnapshot){
    querySnapshot.forEach(function(doc){
      console.log(doc.id);

      var row = document.createElement("DIV");
        row.setAttribute("class", "row");
      var column = document.createElement("DIV");
        column.setAttribute("class", "column");
        row.appendChild(column);
      let link = 'location.href= '+ "'contact_sheet/contact_sheet.html?group_name=" + doc.id + "'";
        console.log(link);
      var button = document.createElement("BUTTON");
          button.setAttribute('onclick', link);
          button.setAttribute("class", "button");

        var button_text = document.createTextNode(doc.id);

        button.appendChild(button_text);
        row.appendChild(button);




      document.getElementById("groups").appendChild(row);

    })

  }
)
