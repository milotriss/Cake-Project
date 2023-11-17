let users = [
    {
    id: 1,
    name: "Lam Nhat Tien",
    email: "admin",
    password: "admin98",
    role: 1, // vai tro admin or user
    status: 1, // trang thai bi cam hay ko
    img: "../assets/images/cake/admin.jpeg"
}
]
if (!JSON.parse(localStorage.getItem("users"))) {
    localStorage.setItem("users",JSON.stringify(users))
}