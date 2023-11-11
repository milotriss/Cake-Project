let users = [
    {
    idUser: 1,
    name: "Lam Nhat Tien",
    email: "Tien123@gmail.com",
    password: "lamvuyvy98",
    confirmPw: "lamvuyvy98",
    role: 1, // vai tro admin or user
    status: 1, // trang thai bi cam hay ko
    carts: [],
}
]
if (!JSON.parse(localStorage.getItem("users"))) {
    localStorage.setItem("users",JSON.stringify(users))
}