var $ = function (id) {
  return document.getElementById(id);
}

function addPatron() {
  isValid = validateItems();

  if (isValid) {
    $('myform').submit();
  } else {
    $('endmessage').innerHTML = "Patron Not Added!"
  }
}

function validateItems() {
  // performs validations on all fields
  myname = $("firstname").value;
  

  if (myname.length == 0) {
    return false;
  } else {
    return true;
  }
}


function clearFields() {
  // JavaScript for clearing fields
}

window.onload = function () {
  $("addpatron").onclick = addPatron;
  $("clearfields").onclick = clearFields;
  $("firstname").focus();
}