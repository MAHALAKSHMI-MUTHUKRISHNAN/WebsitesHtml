

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item)=> {
    item.addEventListener('click',()=>{
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    });


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