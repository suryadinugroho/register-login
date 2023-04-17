function daftar() {
  var first = document.getElementById("first-name").value;
  var last = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  pola = /@+./;

  if (first == "") {
    alert("please fill in the first name correctly");
  } else if (last == "") {
    alert("please fill in the last name correctly");
  } else if (email == "") {
    alert("Please fill in the email correctly and completely");
  } else if (!pola.test(email)) {
    alert("emails must include the @ sign and .");
  } else if (password == "") {
    alert("please fill in the password correctly");
  } else {
    alert("success");
  }
}
