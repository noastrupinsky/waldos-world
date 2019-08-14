function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var group_name = getUrlVars()["group_name"];
document.getElementById("group_name").innerHTML = group_name;
 let link =  '../home.html'




let home_button = document.getElementById("home");

home_button.onclick = function (){
  window.location = link
}

var db = firebase.firestore();

var groupRef = db.collection("groups");
var  rbc = groupRef.doc(group_name);
rbc.collection('users').get().then(
  function(querySnapshot){
    querySnapshot.forEach(function(doc){
      console.log(doc.data());
      let data = doc.data();
      let name_data =(data.name);
      let email_data =(data.email);
      let insta_data =(data.insta);
      let snap_data =(data.snap);
      let link_data =(data.link);
      let twit_data =(data.twit);

      var div = document.createElement("DIV");
        div.setAttribute("class", "column")
      var img = document.createElement("IMG");
        img.setAttribute("src", "profile_icon.png");
        div.appendChild(img);
      var name = document.createElement("H2");
        var name_text = document.createTextNode(name_data);
        name.appendChild(name_text);
        div.appendChild(name);
      var info = document.createElement("DIV");
        info.setAttribute("class", "info");
        var email = document.createElement("H3");
          var email_tag = document.createTextNode("Email: ");
          var email_text = document.createTextNode(email_data);
          email.appendChild(email_tag);
          email.appendChild(email_text);
          info.appendChild(email);
        var insta = document.createElement("H3");
          var insta_tag = document.createTextNode("Instagram: ");
          var insta_text = document.createTextNode(insta_data);
          insta.appendChild(insta_tag);
          insta.appendChild(insta_text);
          info.appendChild(insta);
        var snap = document.createElement("H3");
          var snap_tag = document.createTextNode("Snapchat: ");
          var snap_text = document.createTextNode(snap_data);
          snap.appendChild(snap_tag);
          snap.appendChild(snap_text);
          info.appendChild(snap);
        var link = document.createElement("H3");
          var link_tag = document.createTextNode("Linkden: ");
          var link_text = document.createTextNode(link_data);
          link.appendChild(link_tag);
          link.appendChild(link_text);
          info.appendChild(link);
        var twit = document.createElement("H3");
          var twit_tag = document.createTextNode("Twitter: ");
          var twit_text = document.createTextNode(twit_data);
          twit.appendChild(twit_tag);
          twit.appendChild(twit_text);
          info.appendChild(twit);




        div.appendChild(info);

      document.getElementById("div1").appendChild(div);

    })

  }
)
