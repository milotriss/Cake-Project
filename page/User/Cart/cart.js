let idDelete;
function renderCart() {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUsersClone = JSON.parse(localStorage.getItem("userClone"));
  // console.log(dbUsers);
  let listCart = document.querySelector(".list-cart");
  let noneCart = document.querySelector(".cart__top-products")
  let totalUi = document.querySelector(".total-price");
  let total = 0;

  let newDbUser = dbUsers.find((item) => {
    return item.id == dbUsersClone.id;
  });
  
  // console.log(newDbUser);
  listCart.innerHTML = "";
  if (newDbUser.carts.length == 0) {
    noneCart.innerHTML = `<img class="empty__cart" src="../../../assets/images/cake/Daco_5212497.png">`
    totalUi.innerHTML = total
  }
  else{
    newDbUser.carts.forEach((element) => {
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

function minus() {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));
  let dbProduct = JSON.parse(localStorage.getItem("products"));

  let myUser = dbUsers.find((item) => {
    return item.id == dbUserClone.id;
  });

  let myProducts = dbProduct.find((item) => {
    return item.id == id;
  });
}

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
    console.log(result);
      dbUsers[checkIndexUser].carts = result;
      console.log(dbUsers);
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
    console.log(result);
      dbUsers[checkIndexUser].carts = result;
      console.log(dbUsers);
      localStorage.setItem("users", JSON.stringify(dbUsers));
      renderCart()
  }
}

//
function deleteCart() {
  let dbUsers = JSON.parse(localStorage.getItem("users"));
  console.log(dbUsers);
  dbUsers.forEach((item) => {
    let newDbUsers = item.carts.filter((element) => element.id != idDelete);

    console.log(item.carts, "item.carts");
    console.log(newDbUsers, "newdb");
    item.carts = newDbUsers;
    console.log(dbUsers);
    localStorage.setItem("users", JSON.stringify(dbUsers));
  });
  document.querySelector(".popup__cart-delete").style.display = "none";
  renderCart();
}

function onPopUpDelete(id) {
  document.querySelector(".popup__cart-delete").style.display = "flex";
  idDelete = id;
}
function offPopUpDelete() {
  document.querySelector(".popup__cart-delete").style.display = "none";
}
