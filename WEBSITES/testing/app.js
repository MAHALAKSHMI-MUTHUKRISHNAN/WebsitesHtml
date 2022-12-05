

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
    Username: 'goldsmithmuthukrishnan@gmail.com',
    Password: "dhsxlonloprrunmy",
    To: "krish.muthu1970@gmail.com",
    From: "goldsmithmuthukrishnan@gmail.com",
    Subject: `${name} sent to you message`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
   })
   .then((message)=> alert("mail sent successfully"));
}



// Listen for a submit
document.querySelector(".contact-form1").addEventListener("submit", submitForm1);

function submitForm1(e) {
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

  sendEmail2(name1,email1,number,date,ceremony,message1);
}

// Save infos to Firebase
function sendEmail2(name1,email1,number,date,ceremony,message1){
  Email
   .send({
    Host: "smtp.gmail.com",
    Username: 'goldsmithmuthukrishnan@gmail.com',
    Password: "dhsxlonloprrunmy",
    To: "krish.muthu1970@gmail.com",
    From: "goldsmithmuthukrishnan@gmail.com",
    Subject: `${name1} sent to you message`,
    Body: `Name: ${name1} <br/> Email: ${email1} </br> Number: ${number}<br/> Date: ${date} <br/> Ceremony: ${ceremony} <br/> Location: ${location} <br/> Message: ${message1} `,
   })
   .then((message)=> alert("mail sent successfully"));
}