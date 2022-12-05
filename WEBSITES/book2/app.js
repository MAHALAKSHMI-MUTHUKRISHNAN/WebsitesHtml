

// Listen for a submit
document.querySelector(".contact-form1").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name1 = document.querySelector(".name1").value;
  let email1 = document.querySelector(".email1").value;
  let number = document.querySelector(".number").value;
  let date = document.querySelector(".date").value;
  let ceremony = document.querySelector(".ceremony").value;
  let store = document.querySelector(".store").value;
  let message1 = document.querySelector(".message1").value;
  console.log(name1, email1, message1);


  document.querySelector(".contact-form1").reset();

  sendEmail(name1,email1,number,date,ceremony,message1);
}

// Save infos to Firebase
function sendEmail(name1,email1,number,date,ceremony,message1){
  Email
   .send({
    Host: "smtp.gmail.com",
    Username: 'maha2000lakshmi.m@gmail.com',
    Password: "fzolfellcvgefoko",
    To: "mahalakshmi.ofl@gmail.com",
    From: "maha2000lakshmi.m@gmail.com",
    Subject: `${name1} sent to you message`,
    Body: `Name: ${name1} <br/> Email: ${email1} </br> Number: ${number}<br/> Date: ${date} <br/> Ceremony: ${ceremony} <br/> Location: ${location} <br/> Message: ${message1} `,
   })
   .then((message)=> alert("mail sent successfully"));
}