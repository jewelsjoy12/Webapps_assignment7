var $ = function (id) {
  return document.getElementById(id);
}

function addPatron() {
  // 
}


function clearFields() {
  // JavaScript for clearing fields
}

window.onload = function () {
  $("addpatron").onclick = addPatron;
  $("clearfields").onclick = clearFields;
  $("firstname").focus();
}