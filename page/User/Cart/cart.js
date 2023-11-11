function addCart(id){
    let dbProducts = JSON.parse(localStorage.getItem('products'))
    let dbUser = JSON.parse(localStorage.getItem('users'))
    let input = document.querySelector('.input-cart')
    let inputValue = input.value
    let cartItems = dbUser.find((item,index)=>{
        return item.id == id
    })
    let cart = cartItems.carts
    console.log(cart);
    let newDbProducts = dbProducts.find((item,index)=>{
        return item.id == id
    })
    // console.log(newDbProducts);

    const checkCart = cart.find(item => {
        return item.id == id
    }) 
    if (checkCart) {
        const newCart = cart.map(function (item, index) {
            if (item.id == newDbProducts.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item
            }
        })
        localStorage.setItem('cart', JSON.stringify(newCart))
    } else {
        cart.push({
            ...newDbProducts,
            quantity: inputValue
        })
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    renderCart()
}

function renderCart(){
    let db = JSON.parse(localStorage.getItem('products'))
    let dbCart = JSON.parse(localStorage.getItem('cart'))
    // console.log(dbCart);

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
renderCart()

