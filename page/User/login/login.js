function signUpAccount(){
    event.preventDefault()
    let dbUsers = JSON.parse(localStorage.getItem('users'))
    let name = document.getElementById('name-signup')
    let emails = document.getElementById('email-signup')
    let password = document.getElementById('password-signup')
    let confirmPw = document.getElementById('confirm-password-signup')
    let check = dbUsers.find(item=>{
        return item.email == emails.value
    })
    if (check) {
        alert('Tai khoan da ton tai')
    }
    else{
        if (password.value != confirmPw.value) {
            alert('Xac nha mat khau khong chinh xac')
        }
        else{
            dbUsers.push({
                idUser: dbUsers[dbUsers.length-1].idUser + 1,
                name: name.value,
                email: emails.value,
                password: password.value,
                role: 2,
                status: 1,
                carts:[],
            })
        }
    }
    localStorage.setItem('userLogin',JSON.stringify(dbUsers))
    localStorage.setItem('users',JSON.stringify(dbUsers))
    window.location.href = "../login/login.html"
    document.querySelector('.signup').style.display = "none"
    document.querySelector('.signin').style.display = "flex"
}

function signInAccount(){
    event.preventDefault()
    let dbUsers = JSON.parse(localStorage.getItem('users'))
    let emails = document.getElementById('email-signin')
    let passwords = document.getElementById('password-signin')
    let check = dbUsers.find(item=>{
        return item.email == emails.value && item.password == passwords.value
    })
    if (check) {
        window.location.href = "../../../index.html"
        alert('Wellcome to 1990 Bakery')
    }
    else{
        alert('Email hoac Mat khau cua ban khong dung')
    }
}


function signUp(){
    event.preventDefault()
    document.querySelector('.signin').style.display="none"
    document.getElementById('signup').style.display="flex"
}
function signIn(){
    event.preventDefault()
    document.querySelector('.signin').style.display="flex"
    document.getElementById('signup').style.display="none"
}