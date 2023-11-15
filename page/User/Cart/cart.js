function renderCart(){
    let dbUsers = JSON.parse(localStorage.getItem('users'))
    let dbUsersClone = JSON.parse(localStorage.getItem('userClone'))
    // console.log(dbUsers);
    let listCart = document.querySelector('.list-cart')
    let totalUi = document.querySelector('.total-price')
    let total = 0

    let newDbUser = dbUsers.find(item=>{
        return item.id == dbUsersClone.id
    })
    console.log(newDbUser);
    listCart.innerHTML = ""
    newDbUser.carts.forEach(element=>{
    listCart.innerHTML +=
    `
    <li>
        <img src="../../../${element.img}" alt="">
        <p>${element.productName}</p>
        <div class="cart__quantity">
            <span>${element.quantity}</span>
            <button onclick="minus()">-</button>
            <button onclick="plus()">+</button>
        </div>
        <i onclick="deleteCart(${element.id})" class="ti-trash"></i>
    </li>
    `
    total += element.quantity * element.price
    })
    totalUi.innerHTML = total.toLocaleString() + " VND"
    
}
renderCart()

function minus(){

}

function deleteCart(id){
    let dbUsers = JSON.parse(localStorage.getItem('users'))
    console.log(dbUsers);
    dbUsers.forEach(item=>{
        let newDbUsers = item.carts.filter(element=>{
            return element.id != id
        })
        console.log(item.carts, 'item.carts');
        console.log(newDbUsers, 'newdb');
        item.carts = newDbUsers
        console.log(dbUsers);
        localStorage.setItem('users', JSON.stringify(dbUsers))
    })
    renderCart()
}