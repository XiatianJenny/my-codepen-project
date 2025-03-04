const form = document.querySelector("form");

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "projectexample521@gmail.com",
    Password : "AF133D4D5B75D95B9C7D4AD4BC8FB5B7D2F4",
    To : 'projectexample521@gmail.com',
    From : "projectexample521@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  sendEmail();
})