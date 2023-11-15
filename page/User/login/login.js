// const userService = new UserService();


//Dang ky
function signUpAccount() {
  event.preventDefault();
    let name = document.getElementById("name-signup").value
    let emails = document.getElementById("email-signup").value
    let password = document.getElementById("password-signup").value
    let confirmPw = document.getElementById("confirm-password-signup").value

  let dbUsers = getAllItems("users");
  let check = dbUsers.find((item) => {
    return item.email == emails;
  });
  if (check) {
    alert("Tai khoan da ton tai");
  } else {
    if (name== 0 && emails == 0 && password == 0) {
      alert('nhap day du thong tin')
    }else{
      if (password != confirmPw) {
        alert("Xac nhan mat khau nhap lai khong chinh xac");
      } else {
        alert("ban da dang ky thanh cong");
        let newDbUsers = insertItem('users', {
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
  let check = dbUsers.find((item) => {
    return item.email == emails.value && item.password == passwords.value;
  });
  console.log(check);
  if (check) {
    window.location.href = "http://127.0.0.1:5501/index.html";
    alert("Wellcome to 1990 Bakery");
    localStorage.setItem("userClone", JSON.stringify(check));
  } else {
    alert("Email hoac Mat khau cua ban khong dung");
  }
}
// function renderLogout(){
//   let dbUserClone = JSON.parse(localStorage.getItem('userClone'))
//   console.log(dbUserClone);
//   let profile = document.getElementById('profile')
//   let change = document.querySelector('.login-btn')
//   if (dbUserClone) {
//     change = "block";
//     profile.innerHTML = 
//     `
//       <span>Hi, ${dbUserClone.name}</span>
//       <p onclick="logout()" >Logout</p>
//     `
//   }else {
//     profile.innerHTML = ""
//     change = "none"
//     // console.log(document.querySelector('.login-btn'));
//   }
// }

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