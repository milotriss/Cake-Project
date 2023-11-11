function renderCart(){
    let db = JSON.parse(localStorage.getItem('products'))
    let dbCart = JSON.parse(localStorage.getItem('carts'))
    console.log(dbCart);
    let listCart = document.querySelector('.list-cart')
    // console.log(listCart);
    listCart.innerHTML = ""
    dbCart.forEach((item,index) =>{
        listCart.innerHTML+=
        `
    <li>
        <img
            src="../../${item.img}"
            alt=""
        />
        <p>${item.productName}</p>
        <div class="cart__quantity">
            <span>${item.quantity}</span>
            <button>-</button>
            <button>+</button>
        </div>
        <span>${item.price * item.quantity}</span>
        <i class="ti-trash"></i>
    </li>
        `
    })
    let renderTotalPrice = document.querySelector('.total-price')
    let totalPrice = 0
    db.forEach(item=>{
        totalPrice += item.price * item.quantity
    })
    renderTotalPrice.innerText = totalPrice

}
renderCart

function addCart(id){
    let dbProducts = JSON.parse(localStorage.getItem('products'))
    let dbUser = JSON.parse(localStorage.getItem('users'))
    let input = document.querySelector('.input-cart')
    let inputValue = input.value
    let cart = dbUser.find((item,index)=>{
        return item.id == id
    })
    // console.log(cart.carts);
    let newDbProducts = dbProducts.find((item,index)=>{
        return item.id == id
    })
    // console.log(newDbProducts);
    const newCart = {
        ...newDbProducts,
        quantity : inputValue,
    }
    // console.log(newCart);

    let myCart = cart.carts
    myCart.push(newCart)
    console.log(myCart, "aaa");
    localStorage.setItem('carts',JSON.stringify(myCart))
    renderCart()
}