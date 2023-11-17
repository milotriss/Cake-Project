// const userService = new UserService();


//Dang ky
function signUpAccount() {
  event.preventDefault();
    let name = document.getElementById("name-signup").value
    let emails = document.getElementById("email-signup").value
    let password = document.getElementById("password-signup").value
    let confirmPw = document.getElementById("confirm-password-signup").value

  let dbUsers = getAllItems("users");
  let checkPassWord = password.split('')
  let check = dbUsers.find((item) => {
    return item.email == emails;
  });
  if (check) {
    alert("Account already EXISTS!");
  } else {
    if (name.length == 0 || emails.length == 0 || password.length == 0) {
      alert('Enter complete information')
      window.reload()
    }else{
      if (password != confirmPw) {
        alert("Confirm password INCORRECT!");
        window.reload()
      }if (checkPassWord.length < 4 || checkPassWord.length > 16) {
        alert('Password must be from 4 to 16 characters, Tks!')
        window.reload()
      }else {
        alert("SIGN UP SUCCESS");
          insertItem('users', {
          name: name,
          email: emails,
          password: password,
          role: 2,
          status: 1,
          carts: [],
        })
      }
    }
    
  }
  document.querySelector(".signup").style.display = "none";
  document.querySelector(".signin").style.display = "flex";
}


// Dang Nhap
function signInAccount() {
  event.preventDefault();
  let dbUsers = getAllItems("users");
  let emails = document.getElementById("email-signin");
  let passwords = document.getElementById("password-signin");
  let check = dbUsers.find((item) => item.email == emails.value && item.password == passwords.value && item.role == 2);

  if (check) {
    window.location.href = "http://127.0.0.1:5501/index.html";
    alert(`Welcome ${check.name} to 1990 Bakery`);
    localStorage.setItem("userClone", JSON.stringify(check));
  } else {
    alert("Your Email or Password is INCORRECT!");
    window.reload()
  }
}

function signUp() {
  event.preventDefault();
  document.querySelector(".signin").style.display = "none";
  document.getElementById("signup").style.display = "flex";
}
function signIn() {
  event.preventDefault();
  document.querySelector(".signin").style.display = "flex";
  document.getElementById("signup").style.display = "none";
}