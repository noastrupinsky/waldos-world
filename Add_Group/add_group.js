




let submit_button = document.getElementById("submit");
let add_another_email = document.getElementById('add_email');

let email_list = [];
let length_emails = 1;

let name = document.getElementsByName('group_name')[0].value;
let description = document.getElementsByName('description')[0].value;

let url =


add_another_email.onclick = function(ev) {
  console.log(length_emails);
  var para = document.createElement("input");
  para.classList.add("emails");
  para.setAttribute("type", "email")
  var node = document.createTextNode("");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
  length_emails++;

};


submit_button.onclick = function(){

  for ( let i = 0; i < length_emails; i++ ){
    var emails = document.getElementsByClassName('emails')[i].value;
    email_list.push(emails);
    console.log(email_list);
}
  sgMail.send(msg);
  console.log("sent");
};
