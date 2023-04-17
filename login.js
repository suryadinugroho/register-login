function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  pola = /@,./;

  if (email == "") {
    alert("email harus di isi dengan lengkap");
  } else if (password == "") {
    alert("password harus di isi dengan lengkap");
  } else if (email != "suryaadi@gmail.com") {
    alert("isi email dengan benar");
  } else if (password != "surya") {
    alert("isi password dengan benar");
  } else {
    alert("sukses");
  }
}
