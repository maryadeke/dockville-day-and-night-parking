
const validate = (event) => {
  let e = 0;
  // alert('testing')
// picking input fields with their names or IDs
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNumber = document.getElementById("phoneNumber");
let numberPlate = document.getElementById("numberPlate");
let email = document.getElementById("email");
let ninNumber = document.getElementById("ninNumber");
let uniqueNumber = document.getElementById("uniqueNumber");
let carType = document.getElementById("car-type");
let vehicleModel = document.getElementById("vehicleModel");
let vehicleColor = document.getElementById("vehicleColor");
// let registrationTime = document.getElementById("registrationTime");
// let registrationDate = document.getElementById("registrationDate");
let carModel = document.getElementById("car-model");
// picking error fields
let firstNameError = document.getElementById("firstName-error");
let lastNameError = document.getElementById("lastName-error");
let phoneNumberError = document.getElementById("phoneNumber-error");
let emailError = document.getElementById("email-error");
let numberPlateError = document.getElementById("numberPlate-error");
let ninNumberError = document.getElementById("ninNumber-error");
let uniqueNumberError = document.getElementById("uniqueNumber-error");
let carTypeError = document.getElementById("carType-error");
let vehicleModelError = document.getElementById("vehicleModel-error");
let vehicleColorError = document.getElementById("vehicleColor-error");
// let dateTimeError = document.getElementById("dateTime-error");
let carModelError = document.getElementById("carModel-error");
// validating first name
if (firstName.value == "") {
  firstName.style.border = "2px solid red";
  firstNameError.innerHTML = "First Name is required";
  firstNameError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  firstName.focus();
  e++;
} else if (firstName.value.length < 2) {
  firstName.style.border = "2px solid red";
  firstNameError.innerHTML = "First Name must be at least 2 characters";
  firstNameError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  firstName.focus();
  e++;
} else if (firstName.value.length > 20) {
  firstName.style.border = "2px solid red";
  firstNameError.innerHTML = "First Name cannot be more than 20 characters";
  firstNameError.style =
    "color: red; font-size:11px;  font-family: helvetica,Arial,sans-serif";
  firstName.focus();
  e++;
} else {
  firstName.style.border = "2px solid green";
  firstNameError.innerHTML = "";
  lastName.focus();
}

// validating last name
if (lastName.value == "") {
  lastName.style.border = "2px solid red";
  lastNameError.innerHTML = "Last Name is required";
  lastNameError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  lastName.focus();
  e++;
} else if (lastName.value.length < 2) {
  lastName.style.border = "2px solid red";
  lastNameError.innerHTML = "Last Name must be at least 2 characters";
  lastNameError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  lastName.focus();
  e++;
} else if (lastName.value.length > 20) {
  lastName.style.border = "2px solid red";
  lastNameError.innerHTML = "Last Name cannot be more than 20 characters";
  lastNameError.style =
    "color: red; font-size:11px;  font-family: helvetica,Arial,sans-serif";
  lastName.focus();
  e++;
} else {
  lastName.style.border = "2px solid green";
  lastNameError.innerHTML = "";
  email.focus();
}

//    validating email
if (email.value == "") {
  email.style.border = "2px solid red";
  emailError.textContent = "Email is required";
  emailError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  email.focus();
  e++;
}
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!email.value.match(emailRegex)) {
  email.style.border = "2px solid red";
  emailError.textContent = "The email address is not valid.";
  emailError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  email.focus();
  e++;
} else {
  email.style.border = "2px solid green";
  emailError.textContent = "";
  phoneNumber.focus();
}

// validating for NIN
if (ninNumber.value == "") {
  ninNumber.style.border = "2px solid red";
  ninNumberError.innerHTML = "NIN Number is required";
  ninNumberError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  ninNumber.focus();
  e++;
}
const ninNumberRegex = /^CF([a-zA-Z0-9]{12})+$/;
const ninNumberRegex2 = /^CF([a-zA-Z0-9]{12})+$/;

if (
  !(
    ninNumberRegex.test(ninNumber.value) ||
    ninNumberRegex2.test(ninNumber.value)
  )
) {
  ninNumber.style.border = "2px solid red";
  ninNumberError.innerHTML =
    " NIN number should look like CFxxxx or CMxxxx";
  ninNumberError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  ninNumber.focus();
  e++;
} else {
  ninNumber.style.border = "2px solid green";
  ninNumberError.innerHTML = "";
}

//  Validating phone number
if (phoneNumber.value == "") {
  phoneNumber.style.border = "2px solid red";
  phoneNumberError.innerHTML = "Phone Number is required";
  phoneNumberError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  phoneNumber.focus();
  e++;
}
let phoneNumberRegex =
  /^(\+256|0)(77[0-9]|72[0-9]|74[0-9]|78[0-9]|70[0-9]|71[0-9]|75[0-9]|76[0-9]|79[0-9])(\d{6})$/;

if (!phoneNumberRegex.test(phoneNumber.value)) {
  phoneNumber.style.border = "2px solid red";
  phoneNumberError.innerHTML = "Invalid phone number";
  phoneNumberError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  phoneNumber.focus();
  e++;
} else {
  phoneNumber.style.border = "2px solid green";
  phoneNumberError.innerHTML = "";
  uniqueNumber.focus();
}

//  generating unique id numbers
const bodaRegex = /^BB-([0-9]{3})+$/;
const pcarRegex = /^PC-([0-9]{3})+$/;
const taxiRegex = /^TX-([0-9]{3})+$/;
const truckRegex = /^TK-([0-9]{3})+$/;
const coasterRegex = /^CC-([0-9]{3})+$/;
// eg BB-001, BB-002, BB-003

if (
  !(
    bodaRegex.test(uniqueNumber.value) ||
    pcarRegex.test(uniqueNumber.value) ||
    taxiRegex.test(uniqueNumber.value) ||
    truckRegex.test(uniqueNumber.value) ||
    coasterRegex.test(uniqueNumber.value)
  )
) {
  uniqueNumber.style.border = "2px solid red";
  uniqueNumberError.textContent = "Enter a valid unique number";
  uniqueNumber.focus();
  e++;
} else {
  uniqueNumber.style.border = "2px solid green";
  uniqueNumberError.textContent = "";
  carType.focus();
}

// validating car type
if (carType.value == "") {
  carType.style.border = "2px solid red";
  carTypeError.textContent = "Car Type is required";
  carTypeError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  carType.focus();
  e++;
} else {
  carType.style.border = "2px solid green";
  carTypeError.textContent = "";
  numberPlate.focus();
}

// // validating car model
// if (carModel.value == "") {
//   carModel.style.border = "2px solid red";
//   carModelError.innerHTML = "Car Model is required";
//   carModelError.style =
//     "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
//   carModel.focus();
//   e++;
// } else {
//   carModel.style.border = "2px solid green";
//   carModelError.textContent = "";
//   // make.focus();
// }

//validating number plate
if (numberPlate.value == "") {
  numberPlate.style.border = "1px solid red";
  numberPlateError.innerHTML = "Number Plate is required";
  numberPlateError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  e++;
}

var numberPlateRegex = /^[U][A-Z0-9]{6}$/;
if (!numberPlate.value.match(numberPlateRegex)) {
  numberPlateError.innerHTML =
    "Number plate must start with a capital 'U' followed by 6 alphanumeric characters.";
  e++;
} else {
  numberPlate.style.border = "2px solid green";
  numberPlateError.innerHTML = "";
  vehicleModel.focus();
}
// validating vehicle model
if (vehicleModel.value == "") {
  vehicleModel.style.border = "2px solid red";
  vehicleModelError.innerHTML = "vehicle model is required";
  vehicleModelError.style =
    "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
  vehicleModel.focus();
  e++;
} else {
  vehicleModel.style.border = "2px solid green";
  vehicleModelError.innerHTML = "";
  vehicleColor.focus();
}

//  validating vehicle color
if (vehicleColor.value === "") {
  vehicleColor.style.border = "2px solid red";
  vehicleColorError.innerHTML = "Vehicle color is required";
  vehicleColorError.style.color = "red";
  vehicleColorError.style.fontSize = "11px";
  vehicleColorError.style.fontFamily = "helvetica, Arial, sans-serif";
  vehicleColor.focus();
  e++;
} else {
  vehicleColor.style.border = "2px solid green";
  vehicleColorError.innerHTML = "";
}

// validating date and time

function validateDateTime(e) {
const registrationTime = document.getElementById("registrationTime").value;
const registrationDate = document.getElementById("registrationDate").value;

// Check if both time and date fields are filled
if (registrationTime.trim() === "" || registrationDate.trim() === "") {
  document.getElementById("dateTime-error").textContent =
    "Date and time are required";
  document.getElementById("dateTime-error").style.color = " red";
  document.getElementById("dateTime-error").style.fontSize = "11px";
  document.getElementById("dateTime-error").style.fontFamily =
    "helvetica, Arial, sans-serif";
  document.getElementById("registrationTime").style.border =
    "2px solid red";
  document.getElementById("registrationDate").style.border =
    "2px solid red";
  e++;
} else {
  // Combine date and time into a single string in the format "dd-mm-yyyy HH:mm"
  const dateTimeString =
    formatDate(registrationDate) + " " + registrationTime;
  const dateTime = new Date(dateTimeString);

  // Check if the combined datetime is a valid date and time
  if (isNaN(dateTime.getTime())) {
    document.getElementById("dateTime-error").textContent =
      "Invalid date and time";
    document.getElementById("dateTime-error").style.color = "red";
    document.getElementById("dateTime-error").style.fontSize = "11px";
    document.getElementById("dateTime-error").style.fontFamily =
      "helvetica, Arial, sans-serif";

    e++;
    } else {
      // Valid date and time, clear the error message if any
      document.getElementById("dateTime-error").textContent = "";
      document.getElementById("registrationTime").style.border =
        "2px solid green";
      document.getElementById("registrationDate").style.border =
        "2px solid green";

      return true;
    }
  }
}

// Function to format date from yyyy-mm-dd to dd-mm-yyyy
function formatDate(registrationDate) {
  const parts = registrationDate.split("/");
  if (parts.length === 3) {
    return parts[0] + "-" + parts[1] + "-" + parts[2];
  }
  return registrationDate;
}

// Call the validateDateTime function when the form is submitted
// function Validate(e) {
  // ... Other validation code ...

  // Validate date and time
  const isDateTimeValid = validateDateTime(e);

// e ++ if any validation failed
if (!isDateTimeValid) {
  e++;
}

// ... Other validation code ...

const genderRadios = document.getElementsByName("gender");
let selectedGender = false;

for (const radio of genderRadios) {
  if (radio.checked) {
    selectedGender = true;
    break;
  }
}

const errorDiv = document.getElementById("error");

if (!selectedGender) {
  errorDiv.style.color = "red";
  errorDiv.textContent = "Please select a gender";
} else {
  errorDiv.textContent = "";
  // Perform other actions if validation passes
}

// Return true if all validations passed
// return true;
if(e>0){
  event.preventDefault();
}
}