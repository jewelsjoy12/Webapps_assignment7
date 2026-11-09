var $ = function (id) {
  return document.getElementById(id);
}

function addPatron() {
  formatNames();

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

function formatNames() {
  var firstName = $("firstname").value.trim().replace(/\s+/g, " ");
  var lastName = $("lastname").value.trim().replace(/\s+/g, " ");

  if (firstName.length > 0) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }

  if (lastName.length > 0) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  }

  $("firstname").value = firstName;
  $("lastname").value = lastName;
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

  $("firstname").focus();
}

function setFieldFocus(field) {
  var fields = document.querySelectorAll(
    "#myform input, #myform select, #myform textarea"
  );

  for (var i = 0; i < fields.length; i++) {
    fields[i].style.backgroundColor = "white";
  }

  field.style.backgroundColor = "yellow";
}

function clearFieldFocus(field) {
  field.style.backgroundColor = "white";
}

window.onload = function () {
  $("addpatron").onclick = addPatron;
  $("clearfields").onclick = clearFields;

  var fields = document.querySelectorAll(
    "#myform input, #myform select, #myform textarea"
  );

  for (var i = 0; i < fields.length; i++) {
    fields[i].onfocus = function () {
      setFieldFocus(this);
    };

    fields[i].onblur = function () {
      clearFieldFocus(this);
    };

    fields[i].style.backgroundColor = "white";
  }

  $("firstname").focus();
}