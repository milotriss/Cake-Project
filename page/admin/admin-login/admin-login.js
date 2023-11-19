function loginAdmin() {
  event.preventDefault();
  let dbUser = JSON.parse(localStorage.getItem("users"));

  let emailValue = document.getElementById("email-admin").value;
  let passwordValue = document.getElementById("password-admin").value;

  let check = dbUser.find(
    (item) =>
      item.email == emailValue &&
      item.password == passwordValue &&
      item.role == 1
  );
  if (check) {
    if (check.status == 2) {
      alert("Your account has been BLOCKED!");
    } else {
      window.location.href ="http://127.0.0.1:5501/page/admin/admin/admin.html";
      alert(`Welcome ${check.name}`);
      localStorage.setItem("adminClone", JSON.stringify(check));
    }
  } else {
    alert("Your Email or Password is INCORRECT!");
    window.reload();
  }
}
