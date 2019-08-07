

let submit_button = document.getElementById("submit");

submit_button.onclick = function(){
  for (var i = 0; i < 100; i++ ){
  var emails= document.getElementsByName('email')[0].value;
  console.log(group_name);
}
}







let add_another_email = document.getElementById('add_email');

add_another_email.onclick = function(ev) {
  var para = document.createElement("input");
  var node = document.createTextNode("");
  para.appendChild(node);
  var element = document.getElementById("emails");
  element.appendChild(para);
};

/*
var email_list = []
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: email_list,
  from: 'www.follow.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg); */
