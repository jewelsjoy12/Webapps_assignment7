var $ = function (id) {
  return document.getElementById(id);
}

function addPatron() {
  // Defining variables
  var firstName = $("firstname").value;
  var lastName = $("lastname").value;
  var email = $("email").value;
  var city = $("city").value;
  var donation = $("donation").value;

  // Send values to validation
  var isValid = validateItems(firstName, lastName, email, city, donation);

  // Validation response - submit or error
  if (isValid) {
    $('myform').submit();
  } else {
    $('endmessage').innerHTML = "Patron Not Added!"
  }
}

function validateItems(firstName, lastName, email, city, donation) {
  var isValid = true;

  // Reset messages if submit button is clicked again
  $("firstnameerror").innerHTML = "";
  $("lastnameerror").innerHTML = "";
  $("emailerror").innerHTML = "";
  $("cityerror").innerHTML = "";
  $("donationerror").innerHTML = "";
  $("endmessage").innerHTML = "";

  //validate each field
  if (firstName.length == 0) {
    $("firstnameerror").innerHTML = "Enter First Name";
    isValid = false;
  }
  if (lastName.length == 0) {
    $("lastnameerror").innerHTML = "Enter Last Name";
    isValid = false;
  }

  if (email.length == 0) {
    $("emailerror").innerHTML = "Enter Email";
    isValid = false;
  }

  if (city == '-') {
    $("cityerror").innerHTML = "Select a City from the list";
    isValid = false;
  }

  if (donation.length == 0) {
    $("donationerror").innerHTML = "Enter Donation Amount";
    isValid = false;
  } else if (isNaN(donation)) {
    $("donationerror").innerHTML = "Amount must be numeric";
    isValid = false;
  }

  return isValid;
}


var clearFields = function () {
  $("firstname").value = "";
  $("lastname").value = "";
  $("email").value = "";
  $("city").value = "-";
  $("donation").value = "";

  $("firstnameerror").innerHTML = "";
  $("lastnameerror").innerHTML = "";
  $("emailerror").innerHTML = "";
  $("cityerror").innerHTML = "";
  $("donationerror").innerHTML = "";

  $("endmessage").innerHTML = "";

}

window.onload = function () {
  $("addpatron").onclick = addPatron;
  $("clearfields").onclick = clearFields;
  $("firstname").focus();
}