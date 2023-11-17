let idDelete;
function renderCart() {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUsersClone = JSON.parse(localStorage.getItem("userClone"));
  let listCart = document.querySelector(".list-cart");
  let noneCart = document.querySelector(".cart__top-products")
  let totalUi = document.querySelector(".total-price");
  let total = 0;

  let newDbUser = dbUsers.find(item => item.id == dbUsersClone.id);
  listCart.innerHTML = "";
  if (newDbUser.carts.length == 0) {
    noneCart.innerHTML = `<img class="empty__cart" src="../../../assets/images/cake/Daco_5212497.png">`
    totalUi.innerHTML = total
  }
  else{
    newDbUser.carts.forEach(element => {
      listCart.innerHTML += `
      <li>
          <img src="../../../${element.img}" alt="">
          <p>${element.productName}</p>
          <div class="cart__quantity">
              <span>${element.quantity}</span>
              <button onclick="onMinus(${element.id})">-</button>
              <button onclick="onPlus(${element.id})">+</button>
          </div>
          <p>${(element.quantity * element.price).toLocaleString() + " VND"}</p>
          <i onclick="onPopUpDelete(${element.id})" class="ti-trash"></i>
      </li>
      `;
      total += element.quantity * element.price;
    });
    totalUi.innerHTML = total.toLocaleString() + " VND";
  }
}
renderCart();

// 
function onPlus(id) {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));
  let dbProduct = JSON.parse(localStorage.getItem("products"));

  let myProducts = dbProduct.find((item) => item.id == id);
  let myUser = dbUsers.find((item) => item.id == dbUserClone.id);
  let checkIndexUser = dbUsers.findIndex((item,index) => item.id == dbUserClone.id);
  let checkIndexProducts = myUser.carts.findIndex((item) => item.id == myProducts.id);

  if (dbUsers[checkIndexUser].carts[checkIndexProducts].quantity < myProducts.stock) {
    let result = dbUsers[checkIndexUser].carts.map((item,index) => {
      if (index == checkIndexProducts) {
        return {
          ...item,
          quantity: +item.quantity + 1,
        };
      }
      else{
        return item;
      }
    });
      dbUsers[checkIndexUser].carts = result;
      localStorage.setItem("users", JSON.stringify(dbUsers));
      renderCart()
  }else{
    alert('san vuot qua gioi han')
  }
}

//
function onMinus(id) {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));
  let dbProduct = JSON.parse(localStorage.getItem("products"));

  let myProducts = dbProduct.find((item) => item.id == id);
  let myUser = dbUsers.find((item) => item.id == dbUserClone.id);
  let checkIndexUser = dbUsers.findIndex((item,index) => item.id == dbUserClone.id);
  let checkIndexProducts = myUser.carts.findIndex((item) => item.id == myProducts.id);

  if (dbUsers[checkIndexUser].carts[checkIndexProducts].quantity > 1) {
    let result = dbUsers[checkIndexUser].carts.map((item,index) => {
      if (index == checkIndexProducts) {
        return {
          ...item,
          quantity: +item.quantity - 1,
        };
      }
      else{
        return item;
      }
    });
      dbUsers[checkIndexUser].carts = result;
      localStorage.setItem("users", JSON.stringify(dbUsers));
      renderCart()
  }
}

//
function deleteCart() {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));

  let myUser = dbUsers.find(item => item.id == dbUserClone.id)
  let result = myUser.carts.filter((element) => element.id != idDelete);
    myUser.carts = result
    localStorage.setItem("users", JSON.stringify(dbUsers));
  document.querySelector(".popup__cart-delete").style.display = "none";
  renderCart();
}

//
function onPopUpDelete(id) {
  document.querySelector(".popup__cart-delete").style.display = "flex";
  idDelete = id;
}

//
function offPopUpDelete() {
  document.querySelector(".popup__cart-delete").style.display = "none";
}

//
function toPayment(){
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));

  let myUser = dbUsers.find((item) => item.id == dbUserClone.id);

  if (myUser.carts.length == 0) {
    alert('Your product is EMPTY!')
  }else{
    window.location.href = "http://127.0.0.1:5501/page/user/payment/payment.html"
  }
}