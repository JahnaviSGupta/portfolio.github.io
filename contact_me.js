function sendMail(){
    let parms = {
    name : document.getElementById("demo-name").value,
    email : document.getElementById("demo-email").value,
    // subject : document.getElementById("subjec").value,
    message : document.getElementById("demo-message").value,
    }

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return; // Exit the function if any field is empty
    }

    else{
emailjs.send("service_8fnt02n","template_xnnft4t",parms).then(alert("Email Sent!"))
    }
}