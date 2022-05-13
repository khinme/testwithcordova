// This is a JavaScript file

const btn=document.querySelector('button')
btn.addEventListener('click',()=>
{
    // Email.send({
    //     Host: "smtp.mailtrap.io",
    //     Username: "8123783f195f1c",
    //     Password: "d39b565aec1016",
    //     To: "khinmemehtwe1745@gmail.com",
    //     From: "sendingcode123@gmail.com",
    //     Subject: "Contact us",
    //     Body: "testing"
    // }).then(msg=>alert("The email successfully sent"))

Email.send({
    // Host : "smtp.mailtrap.io",
    // Username : "8123783f195f1c",
    // Password : "d39b565aec1016",
    SecureToken : "6fec5fa2-b5fd-4106-8f0e-c4bca4d8f9d1",
    To : 'khinmemehtwe1745@gmail.com',
    From : "sendingcode123@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("The email successfully sent")
);
    
}) 