function Validate (event)  {
    let error = 0;
    // picking input fields with their names or IDs
    let firstName =  document.registration.firstName;
    let lastName = document.registration.lastName
    let phone = document.registration.phone
    let numberPlate = document.registration.numberPlate
    let Email = document.registration.Email

    // picking error fields
    let firstNameError = document.getElementById("firstName-error")
    let lastNameError = document.getElementById("lastName-error")
    let phoneError = document.getElementById("phone-error")
    let EmailError = document.getElementById("Email-error")




    let firstNameRegex = /^[A-Za-z]+$/
// validating empty fields using if statements
if (firstName.value == ""){
    firstName.style.border = "5px solid red";
    firstNameError.textContent = "First Name is required";
    firstNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    firstName.focus();
     error++;
}

else if (firstName.value.length <2){
    firstName.style.border = "1px solid red";
    firstNameError.textContent = "First Name must be at least 2 characters";
    firstNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    firstName.focus();
    error++;
}
else if (firstName.value.length<15){
    firstName.style.border = "1px solid red";
    firstNameError.textContent = "First Name must not be greater than 15 charcters";
    firstNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    firstName.focus();
    error++;
}
 else{
    firstName.style.border = "1px solid green";
    firstNameError.textContent = "";
    lastName.focus();
    
 }
 if (lastName.value == ""){
    lastName.style.border = "1px solid red";
    lastNameError.textContent = "Last Name is required";
    lastNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    lastName.focus();
    error++;
}

else if (lastName.value.length <2){
    lastName.style.border = "1px solid red";
    lastNameError.textContent = "Last Name must be at least 2 characters";
    lastNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    lastName.focus();
    error++;
}

// else if (lastName.value.length<15){
    lastName.style.border = "1px solid red";
     lastNameError.textContent = "Last Name must not be greater than 15 charcters";
    lastNameError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    lastName.focus();
    error++;

else {
    lastName.style.border = "1px solid green";
    lastNameError.textContent = "";
     numberPlate.focus();
}

// validating phone number
if(phone.value == ""){
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone Number is required";
    phoneError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    phone.focus();
    error++;
}
let phoneRegex = "[+][2][5][6][0-9]{9}"
if(phoneRegex.test(phone.value)){
    phone.style.border = "1px solid red";
    phoneError.textContent = "phone number should start with +256";
    phoneError.style = "color:red; font-size:11pxfont family: helvetica,Arial,sans"
    phone.focus();
    error++;
}

// validating Email

if(Email.value == ""){
    Email.style.border = "1px solid red";
    EmailError.textContent = "Email is required";
    EmailError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
    Email.focus();
    error++;
}
 let EmailRegex = 
 if(!Email.value.match(EmailRegex)){
    Email.style.border = "1px solid red";
     EmailError.textContent = "Email address should be valid";   
     EmailError.style = "color:red; font-size:11pxfont family: helvetica,Arial,sans"
     Email.focus();
  error++;
}




if (error > 0){
event.preventDefault();
}

}



 