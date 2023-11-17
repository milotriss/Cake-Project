
function renderPayment(){
    let dbUsers = JSON.parse(localStorage.getItem("users"))
    let dbProducts = JSON.parse(localStorage.getItem("products"))
    let dbUserClone = JSON.parse(localStorage.getItem("userClone"))
    let dbOrders = JSON.parse(localStorage.getItem("orders"))

    let myUser = dbUsers.find((item) => item.id == dbUserClone.id);
    let total = 0
    let list = document.querySelector('.product__payment-items')
    list.innerHTML = ""
    myUser.carts.forEach(item => {
        list.innerHTML +=
        `
        <li>
            <img src="../../../${item.img}">
            <p>${item.productName}</p>
            <span>${item.quantity}</span>
            <span style="font-family: 'Lobster Two', sans-serif;">${(item.quantity * item.price).toLocaleString() + " VND"}</span>
        </li>
        `
        total += item.price * item.quantity;
    });
    document.getElementById('name-user').innerHTML = myUser.name
    document.getElementById('last-price').innerHTML = `Last Price <br> ${total.toLocaleString()} VND`
    
    let str = Date()
    let arr = str.split(" ")
    let date = arr[0] + '-' + arr[2] + '-' + arr[1] + '-' + arr[3]
    document.getElementById('date').innerHTML = date
}

//
function onPayment(){
    event.preventDefault()
    let dbUsers = JSON.parse(localStorage.getItem("users"))
    let dbUserClone = JSON.parse(localStorage.getItem("userClone"))
    let dbOrders = JSON.parse(localStorage.getItem("orders"))
    let dbProduct = JSON.parse(localStorage.getItem("products"))

    let myUser = dbUsers.find(item => item.id == dbUserClone.id)

    let total = 0
    myUser.carts.forEach(item=> total += item.price * item.quantity)
    
    let addressUi = document.getElementById("address").value
    let phoneUi = document.getElementById("phone").value
    
    let str = Date()
    let arr = str.split(" ")
    let dateUi = arr[0] + '-' + arr[2] + '-' + arr[1] + '-' + arr[3]

    // Lấy thông tin cho orders
        if (dbOrders.length == 0) {
            let object = {
                cartOrder : myUser.carts,
                id : 1,
                idUser : myUser.id,
                totalPrice: total,
                address : addressUi,
                phone : phoneUi,
                status : 1,
                date : dateUi,
                payment : 1,
            }
            dbOrders.push(object)
            localStorage.setItem('orders', JSON.stringify(dbOrders))
        } 
        else {
                let object = {
                    cartOrder : myUser.carts,
                    id : dbOrders[dbOrders.length-1].id + 1,
                    idUser : myUser.id,
                    totalPrice: total,
                    address : addressUi,
                    phone : phoneUi,
                    status : 1,
                    date : dateUi,
                    payment : 1,
                }
                dbOrders.push(object)
                localStorage.setItem('orders',JSON.stringify(dbOrders))
            }
        


        // Trừ stock trong users
        dbProduct.forEach(item => {
            myUser.carts.forEach(element => {
                if (item.id == element.id) {
                    item.stock -= element.quantity
                }
            })
        })
        localStorage.setItem('products',JSON.stringify(dbProduct))

        // xoá cart trong users
        dbUsers.forEach(item=>{
            if (item.id == myUser.id) {
                myUser.carts=[]
            }
        })
        localStorage.setItem('users',JSON.stringify(dbUsers))

        alert('Order has been CONFIRMED. We will send order information to your email')
        backHome()
}

//
function onPopUpPayment(){
    event.preventDefault()
    let address = document.getElementById("address").value
    let phone = document.getElementById("phone").value

    if (address.length == 0 || phone.length == 0) {
        alert('Enter complete information!')
        window.reload()
    } if (isNaN(phone) || phone.length != 9) {
            alert('Your Phone number must number and shorter than 10 numbers!')
            document.getElementById("phone").value = ""
            window.reload()
        }else{
            document.querySelector('.popup__payment').style.display = "flex"
        }
    
}
//
function offPopUpPayment(){
    event.preventDefault()
    document.querySelector('.popup__payment').style.display = "none"
    document.getElementById("address").value = ""
    document.getElementById('phone').value = ""
}