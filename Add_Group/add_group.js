
let submit_button = document.getElementById("submit");
let add_another_email = document.getElementById('add_email');

let email_list = [];
let length_emails = 1;



submit_button.onclick = function(){

  for ( let i = 0; i < length_emails; i++ ){
    var emails = document.getElementsByClassName('emails')[i].value;
    email_list.push(emails);
    console.log(email_list);
};

}
add_another_email.onclick = function(ev) {
  length_emails++;
  console.log(length_emails);
  var para = document.createElement("input");
  para.classList.add("emails");
  para.setAttribute("type", "email");
  var node = document.createTextNode("");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);


};
