// function validateForm() {
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

   
//     const nameError = document.getElementById("name-error");
//     const emailError = document.getElementById("email-error");
//     const subjectError = document.getElementById("subject-error");
//     const messageError = document.getElementById("message-error");
 
    
//     nameError.textContent = "";
//     emailError.textContent = "";
//     subjectError.textContent = "";
//     messageError.textContent = "";
 
//     let isValid = true;
 
    
//     if (name === "" || /\d/.test(name)) {
//         nameError.textContent = "Please enter your name properly.";
//         isValid = false;
//     }
 
//     if (email === "" || !email.includes("@") || !email.includes(".")) {
//         emailError.textContent = "Please enter a valid email address.";
//         isValid = false;
//     }
 
//     if (subject === "") {
//         subjectError.textContent = "Please write your subject.";
//         isValid = false;
//     }
 
//     // Validate message
//     if (message === "") {
//         messageError.textContent = "Please write your message here.";
//         isValid = false;
//     }
 
    
//     if (isValid) {
//         document.getElementById("popup").style.display = "block";
//         document.querySelector("form").reset(); 
//     }
 
//     return false; 
// }
 

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }
 

// function clearErrors() {
//     document.getElementById("name-error").textContent = "";
//     document.getElementById("email-error").textContent = "";
//     document.getElementById("subject-error").textContent = "";
//     document.getElementById("message-error").textContent = "";
// }

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    // var httpr=new XMLHttpRequest();
    // httpr.open("POST","/ajax.php",true);
    // httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // httpr.onreadystatechange=function(){
    //     if(httpr.readyState==4 && httpr.status==200){
    //         document.getElementById("response").innerHTML=httpr.responseText;
    //     }
    // }
    // // httpr.send("name="+name+"email="+email+"subject="+subject+"message="+message);
    // httpr.send("name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message);

   
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");
 
    
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
 
    let isValid = true;
 
    
    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }
 
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
 
    if (subject === "") {
        subjectError.textContent = "Please write your subject.";
        isValid = false;
    }
 
    // Validate message
    if (message === "") {
        messageError.textContent = "Please write your message here.";
        isValid = false;
    }
 
    
    if (isValid) {
        document.getElementById("popup").style.display = "block";
        document.querySelector("form").reset(); 
    }
 
    return false; 
}
 

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
 

function clearErrors() {
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("subject-error").textContent = "";
    document.getElementById("message-error").textContent = "";
}