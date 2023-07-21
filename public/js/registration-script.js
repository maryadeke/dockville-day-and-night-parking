const btn = document.querySelector(".btn");
btn.addEventListener("click", validate);
function validate(e){
		e.preventDefault();
		    // picking input fields with their names or IDs
    let firstName =  document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let phoneNumber = document.getElementById('phoneNumber');
    let numberPlate = document.getElementById('numberPlate');
    let email = document.getElementById('email');
    let ninNumber = document.getElementById('ninNumber');
    let uniqueNumber = document.getElementById('vehicleModel');
    let carType = document.getElementById('car-type');
    
      

		    // picking error fields
    let firstNameError = document.getElementById("firstName-error");
    let lastNameError = document.getElementById("lastName-error");
    let phoneNumberError = document.getElementById("phoneNumber-error");
    let emailError = document.getElementById("email-error");
    let numberPlateError = document.getElementById("numberPlate-error");
    let ninNumberError = document.getElementById("ninNumber-error");
    let vehicleModelError = document.getElementById("vehicleModel-error");
		let carTypeError = document.getElementById("carType-error");
    
    
    
    // validating first name
	if (firstName.value == ""){
    firstName.style.border = "2px solid red";
    firstNameError.innerHTML = "First Name is required";
    firstNameError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
    firstName.focus();
     return false;
    }
         else if(firstName.value.length<2){
        firstName.style.border = "2px solid red";
        firstNameError.innerHTML = "First Name must be at least 2 characters";
        firstNameError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
        firstName.focus();
        return false;
    }
          else if(firstName.value.length>20){
          firstName.style.border = "2px solid red";
          firstNameError.innerHTML = "First Name cannot be more than 20 characters";
          firstNameError.style = "color: red; font-size:11px;  font-family: helvetica,Arial,sans-serif"
          firstName.focus();
          return false;
    }

  else{
      firstName.style.border = "2px solid green";
      firstNameError.innerHTML = "";
      lastName.focus();
    }





    // validating last name
 if (lastName.value == ""){
      lastName.style.border = "2px solid red";
      lastNameError.innerHTML = "Last Name is required";
      lastNameError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
      lastName.focus();
      return false;
    }
            else if (lastName < 2){
            lastName.style.border = "2px solid red";
            lastNameError.innerHTML = "Last Name must be at least 2 characters";
            lastNameError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
            lastName.focus();
            return false;
      }
            else if(lastName.value.length>20){
            lastName.style.border = "2px solid red";
            lastNameError.innerHTML = "Last Name cannot be more than 20 characters";
            lastNameError.style = "color: red; font-size:11px;  font-family: helvetica,Arial,sans-serif"
            lastName.focus();
            return false;
      }
   else{
      lastName.style.border = "2px solid green";
      lastNameError.innerHTML = "";
      ninNumber.focus();
       }

            
       
       
       
        // validating for NIN
if (ninNumber.value == ""){
  ninNumber.style.border = "2px solid red";
  ninNumberError.innerHTML = "NIN Number is required";
  ninNumberError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
  ninNumber.focus();
  return false;
}
 const ninNumberRegex  = /^CF([a-zA-Z0-9]{12})+$/;
 const ninNumberRegex2 = /^CF([a-zA-Z0-9]{12})+$/;

 if(!(ninNumberRegex.test(ninNumber.value)||ninNumberRegex2.test(ninNumber.value))){
  ninNumber.style.border = "2px solid red";
  ninNumberError.innerHTML = " NIN number should look like CFxxxx or CMxxxx";
  ninNumberError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
  ninNumber.focus();
  return false;
 }
 else{
  ninNumber.style.border = "2px solid green";
  ninNumberError.innerHTML = "";
 }

//  generating unique id numbers
const bodaRegex = /^BB-([0-9]{3})+$/;
const pcarRegex = /^PC-([0-9]{3})+$/;
const taxiRegex = /^TX-([0-9]{3})+$/;
const truckRegex = /^TK-([0-9]{3})+$/;
const coasterRegex = /^CC-([0-9]{3})+$/;
// eg BB-001, BB-002, BB-003

if(!(vehicleModel.value.test(bodaRegex) || vehicleModel.value.match(pcarRegex) || vehicleModel.value.match(taxiRegex) || vehicleModel.value.match(truckRegex) || vehicleModel.value.match(coasterRegex))) { 
vehicleModel.style.border = "2px solid red";
vehicleModelError.textContent = "Enter a valid vehicle model";
vehicleModelError.focus();
return false;

}






//  Validating phone number
if(phoneNumber.value == ""){
  phoneNumber.style.border = "2px solid red";
  phoneNumberError.innerHTML = "Phone Number is required";
  phoneNumberError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
  phoneNumber.focus();
  return false;
}
 let phoneNumberRegex  = /^(\+256|0)(77[0-9]|72[0-9]|74[0-9]|78[0-9]|70[0-9]|71[0-9]|75[0-9]|76[0-9]|79[0-9])(\d{6})$/;

 if (!phoneNumberRegex.test(phoneNumber.value)) {
  phoneNumber.style.border = "2px solid red";
  phoneNumberError.innerHTML = "Invalid phone number";
  phoneNumberError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
  phoneNumber.focus();
  return false;
 }
 else{
  phoneNumber.style.border = "2px solid green";
  phoneNumberError.innerHTML = "";

 }





 




      // validating email
      if (email.value == ""){
        email.style.border = "1px solid red";
        emailError.textContent = "Email is required";
        emailError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
        email.focus();
         return false;
      }
         let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.value.match(emailRegex)){
          email.style.border = "1px solid red";
          emailError.textContent = "The email adress is not valid.";
          emailError.style = "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
          email.focus();
          return false;
        }
        else{
                  email.style.border = "1px solid green";
                  emailError.textContent = "";
                }

                

      // validating car type
      if (carType.value == ""){
        carType.style.border = "1px solid red";
        carTypeError.textContent = "Car Type is required";
        carTypeError.style ="color:red; font-size:11px; font-family: helvetica,Arial,sans-serif"
        carType.focus();
        return false;
              }
        
         

        

          //validating number plate
          if(numberPlate.value==""){
            numberPlate.style.border = "1px solid red";
            numberPlateError.innerHTML = "Number Plate is required";
            numberPlateError.style ="color:red;font-size:11pxfont family: helvetica,Arial,sans-serif"
            firstName.focus();
            //  return false;
          }else {return true}

          
      
      // // Number plate validation
      // var numberPlateRegex = /^[U][A-Z0-9]{6}$/;
      // if (!numberPlate.match(numberPlateRegex)) {
      //   alert("Number plate must start with a capital 'U' followed by 6 alphanumeric characters.");
      //   return false;
      // }
      // else if
      
      // // Email validation
      // var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // if (!email.match(emailRegex)) {
      //   alert("Please enter a valid email address.");
      //   return false;
      // }
      
      return true;
    



















          }