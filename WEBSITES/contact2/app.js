

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);


  document.querySelector(".contact-form").reset();

  sendEmail(name,email,message);
}

// Save infos to Firebase
function sendEmail(name,email,message){
  Email
   .send({
    Host: "smtp.gmail.com",
    Username: 'maha2000lakshmi.m@gmail.com',
    Password: "fzolfellcvgefoko",
    To: "mahalakshmi.ofl@gmail.com",
    From: "maha2000lakshmi.m@gmail.com",
    Subject: `${name} sent to you message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
   })
   .then((message)=> alert("mail sent successfully"));
}