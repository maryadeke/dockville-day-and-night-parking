const btn = document.querySelector(".btn");
  btn.addEventListener("click", Validate);
  function Validate(e) {
    e.preventDefault();

let carModel= document.getElementById('car-model');
let make= document.getElementById('make');
let gender= document.getElementById('gender');

let carModelError= document.getElementById('carModel-error');
let makeError= document.getElementById('make-error');
let genderError= document.getElementById('gender-error');

// validating car model
    if (carModel.value == "") {
      carModel.style.border = "2px solid red";
      carModelError.innerHTML = "Car Model is required";
      carModelError.style =
        "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
      carModel.focus();
      e++;
    } else {
      carModel.style.border = "2px solid green";
      carModelError.textContent = "";
      make.focus();
    }

    // validating make
    if (make.value == "") {
        make.style.border = "2px solid red";
        makeError.innerHTML = "Tire make  is required";
        makeError.style =
          "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
        make.focus();
        e++;
      } else {
        make.style.border = "2px solid green";
        makeError.textContent = "";
        gender.focus();
      }

    //   validating gender
    if (gender.value == "") {
        gender.style.border = "2px solid red";
        genderError.textContent = "please select a gender";
         genderError.style =
           "color:red; font-size:11px; font-family: helvetica,Arial,sans-serif";
         gender.focus();
         e++;
       } else {
         gender.style.border = "2px solid green";
        genderError.textContent = "";
         make.focus();
       }
  }