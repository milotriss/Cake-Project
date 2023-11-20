let liSideBar = document.querySelectorAll(".list-sidebar");
let itemMain = document.querySelectorAll(".main-none");

liSideBar.forEach((item, index) => {
  item.addEventListener("click", function () {
    liSideBar.forEach((item) => {
      item.classList.remove("admin-active");
    });
    itemMain.forEach((item) => {
      item.classList.remove("admin-active");
    });
    item.classList.add("admin-active");
    itemMain[index].classList.add("admin-active");
  });
});

function renderStatusUsers(status) {
  let result;
  switch (status) {
    case 1:
      result = "Active";
      break;
    case 2:
      result = "Block";
      break;
  }
  return result;
}

// Render info admin
function renderInfoAdmin() {
  let adminInfo = document.querySelector(".admin__info");
  let dbAdminClone = JSON.parse(localStorage.getItem("adminClone"));

  adminInfo.innerHTML = `
    <img src="../../../${dbAdminClone.img}" alt="" />
    <figcaption>
        <h1>${dbAdminClone.name}</h1>
        <p>Position: ...</p>
        <button onclick="logOutAdmin()">Log out</button>
    </figcaption>
    `;
}

function logOutAdmin() {
  let dbAdminClone = JSON.parse(localStorage.getItem("adminClone"));

  if (confirm("Are you SURE about that!!!") == true) {
    dbAdminClone = {};
    localStorage.setItem("adminClone", JSON.stringify(dbAdminClone));
    window.location.href =
      "http://127.0.0.1:5501/page/admin/admin-login/admin-login.html";
  } else {
    window.reload();
  }
}

// Render Dashboard
function renderDashboard() {
  let dbProductAdmin = JSON.parse(localStorage.getItem("products"));
  let dbOrderAdmin = JSON.parse(localStorage.getItem("orders"));
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));

  let revenueValue = document.querySelector(".revenue-number");
  let totalProducts = document.querySelector(".products-total");
  let totalUsers = document.querySelector(".users-total");

  revenue = 0;
  dbOrderAdmin.forEach((item) => {
    revenue += item.totalPrice;
  });
  revenueValue.innerHTML = `${revenue.toLocaleString() + " VND"}`;

  totalProducts.innerHTML = `${dbProductAdmin.length}`;

  let newDbUserAdmin = dbUserAdmin.filter((item) => item.role == 2);
  totalUsers.innerHTML = `${newDbUserAdmin.length}`;
}

// Users
// Render User
function renderListOfUser(page = 1) {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let listUser = document.getElementById("list-users");

  let newDbUserAdmin = dbUserAdmin.filter((item) => item.role == 2);
  let currentPage = (page -1) * 3
  let result = newDbUserAdmin.splice(currentPage,3)
  listUser.innerHTML = "";
  result.forEach((item, index) => {
    listUser.innerHTML += `
            <tr>
                <td>${
                  page === 1 ?
                  `${index + 1} `
                  : `${index  + 1 + 3 * (page -1)}`
                }</td>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.name}</td>
                <td>${renderStatusUsers(item.status)}</td>
                <td>
                  ${
                    item.status == 1
                      ? `<button onclick="blockUser(${item.id})">block</button>`
                      : ""
                  }
                  ${
                    item.status == 1
                      ? `<button onclick="changeToAdmin(${item.id})">change to admin</button>`
                      : ""
                  }
                  ${
                    item.status == 2
                      ? `<button onclick="unBlockUser(${item.id})">unblock</button>`
                      : ""
                  }
                    
                </td>
            </tr>
            `;
  });
}
// Render number pagination 
function renderPageUser(UserOnePage,totalUsers){
  let result = Math.ceil(totalUsers/UserOnePage)
  let numberList = document.getElementById('pageUser')
  numberList.innerHTML = ""
  for (let index = 1; index <= result; index++) {
    numberList.innerHTML += 
    `
    <span onclick="renderListOfUser(${index})">${index}</span>
    `
  }
}

// Render list number pagination 
function renderUiPageUser(){
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));

  let pagination = document.getElementById('paginationUser');
  pagination.innerHTML = 
  `
    <div id="pageUser" class="page">    
    </div>
  `
  let newDbUserAdmin = dbUserAdmin.filter((item) => item.role == 2);
  renderPageUser(3,newDbUserAdmin.length)
}
renderUiPageUser()

// Block
function blockUser(id) {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let newDbUserAdmin = dbUserAdmin.find((item) => item.id == id);
  newDbUserAdmin.status = 2;
  localStorage.setItem("users", JSON.stringify(dbUserAdmin));
  renderListOfUser();
}
// UnBlock
function unBlockUser(id) {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let newDbUserAdmin = dbUserAdmin.find((item) => item.id == id);
  newDbUserAdmin.status = 1;
  localStorage.setItem("users", JSON.stringify(dbUserAdmin));
  renderListOfUser();
}
//
function changeToAdmin(id) {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let newDbUserAdmin = dbUserAdmin.find((item) => item.id == id);
  console.log(newDbUserAdmin);
  if (newDbUserAdmin.status == 2) {
    alert("This User has been BLOCKED!!!, remove block first");
  } else {
    newDbUserAdmin.role = 1;
    localStorage.setItem("users", JSON.stringify(dbUserAdmin));
    renderListOfUser();
    renderListOfAdmin();
  }
}
// Users










// Admin
//Render Admin
function renderListOfAdmin() {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let listAdmin = document.getElementById("list-admin");

  let newDbUserAdmin = dbUserAdmin.filter((item) => item.role == 1);
  listAdmin.innerHTML = "";
  newDbUserAdmin.forEach((item, index) => {
    listAdmin.innerHTML += `
            <tr>
                <td>${+[index] + +1}</td>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.name}</td>
                <td>${renderStatusUsers(item.status)}</td>
                <td>
                  ${
                    item.status == 1
                      ? `<button onclick="blockAdmin(${item.id})">block</button>`
                      : ""
                  }
                  ${
                    item.status == 2
                      ? `<button onclick="unBlockAdmin(${item.id})">unblock</button>`
                      : ""
                  }
                </td>
            </tr>
            `;
  });
}
// Block
function blockAdmin(id) {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let newDbUserAdmin = dbUserAdmin.find((item) => item.id == id);
  newDbUserAdmin.status = 2;
  localStorage.setItem("users", JSON.stringify(dbUserAdmin));
  renderListOfAdmin();
}
// UnBlock
function unBlockAdmin(id) {
  let dbUserAdmin = JSON.parse(localStorage.getItem("users"));
  let newDbUserAdmin = dbUserAdmin.find((item) => item.id == id);
  newDbUserAdmin.status = 1;
  localStorage.setItem("users", JSON.stringify(dbUserAdmin));
  renderListOfAdmin();
}
// Admin








//  Products
function renderStatusProducts(isDelete) {
  let result;
  switch (isDelete) {
    case 1:
      result = "Still in stock";
      break;
    case 2:
      result = "Out of production";
      break;
  }
  return result;
}
//Render Products
function renderProductsAdmin(page = 1) {
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));
  let listProducts = document.getElementById("list-products");
  let currentPage = (page - 1) * 7
  let result = dbProductsAdmin.splice(currentPage,7)
  listProducts.innerHTML = "";

  result.forEach((item, index) => {
    listProducts.innerHTML += `
        <tr class=${item.isDelete == 2 ? "opacity" : ""} id="c">
            <td>${
              page === 1 ?
              `${index + 1} `
              : `${index  + 1 + 7 * (page -1)}`
            }</td>
            <td>${item.id}</td>
            <td><img src="../../../${item.img}"></td>
            <td>${item.productName}</td>
            <td>${item.price.toLocaleString() + " VND"}</td>
            <td>${renderStatusProducts(item.isDelete)}</td>
            <td>${item.category}</td>
            <td>
            ${
              item.isDelete == 1
                ? `<button onclick="openUpdateProductsAdmin(${item.id})" id="btn-editProductsAdmin" >edit</button>`
                : ""
            }
            ${
              item.isDelete == 1
                ? `<button id="btn-deleteProductsAdmin" onclick="deleteProductsAdmin(${item.id})">delete</button>`
                : ""
            }
            ${
              item.isDelete == 2
                ? `<button id="btn-returnProductsAdmin" onclick="returnProducts(${item.id})">Return</button>`
                : ""
            }
              </td>
        </tr>
        `;
  });
}

// Render number pagination 
function renderPageProducts(productsOnePage,totalProducts){
  let result = Math.ceil(totalProducts/productsOnePage)
  let numberList = document.getElementById('pageProducts')
  numberList.innerHTML = ""
  for (let index = 1; index <= result; index++) {
    numberList.innerHTML += 
    `
    <span onclick="renderProductsAdmin(${index})">${index}</span>
    `
  }
}

// Render list number pagination 
function renderUiPageProducts(){
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));

  let pagination = document.getElementById('paginationProducts');
  pagination.innerHTML = 
  `
    
    <div id="pageProducts" class="page">    
    </div>
  
  `
  renderPageProducts(7,dbProductsAdmin.length)
}
renderUiPageProducts()

// Add products
function openAddProductsAdmin() {
  document.querySelector(".overlay-addProducts").style.display = "flex";
}
function offAddProductsAdmin() {
  document.querySelector(".overlay-addProducts").style.display = "none";
}
function addProductsAdmin() {
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));
  let name = document.getElementById("name-adminProducts").value;
  let price = document.getElementById("price-adminProducts").value;
  let stock = document.getElementById("stock-adminProducts").value;
  let img = document.getElementById("img-adminProducts").files[0];
  let category = document.getElementById("category-adminProducts").value;

  if (category == "Category") {
    alert("Must choose Category");
  }
  if (document.getElementById("img-adminProducts").files.length == 0) {
    alert("Please choose Image first");
  } else {
    if (confirm("Have you carefully checked the products information?")) {
      if (name == 0 || price == 0 || stock == 0) {
        alert("Please check the product information again!");
      } else {
        let object = {
          category: category,
          desc: "mo ta",
          id: dbProductsAdmin[dbProductsAdmin.length - 1].id + 1,
          img: `../assets/images/cake2/${img.name}`,
          isDelete: 1,
          price: price,
          productName: name,
          stock: stock,
        };
        dbProductsAdmin.push(object);
        localStorage.setItem("products", JSON.stringify(dbProductsAdmin));
        alert("Add products SUCCESS");
      }
    }
  }
  document.querySelector(".overlay-addProducts").style.display = "none";
}
// Add Products

// Delete Products
function deleteProductsAdmin(id) {
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));

  if (confirm("DELETE!!! Are you SURE about that!")) {
    let result = dbProductsAdmin.find((item) => item.id == id);
    result.isDelete = 2;
    localStorage.setItem("products", JSON.stringify(dbProductsAdmin));
  }
  renderProductsAdmin();
  alert("Out of production SUCCESS");
}
function returnProducts(id) {
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));

  if (confirm("RETURN!!! Are you SURE about that!")) {
    let result = dbProductsAdmin.find((item) => item.id == id);
    result.isDelete = 1;
    localStorage.setItem("products", JSON.stringify(dbProductsAdmin));
  }
  renderProductsAdmin();
  alert("Return product SUCCESS");
}
// Delete Products

// Update Products
function openUpdateProductsAdmin(id) {
  document.querySelector(".overlay-updateProducts").style.display = "flex";
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));

  let result = dbProductsAdmin.find((item) => item.id == id);
  let renderUpdate = document.querySelector(".overlay-updateProducts");
  renderUpdate.innerHTML = `
  <div class="model-updateProducts">
    <h1>${result.productName}</h1>
    <label style="cursor: pointer;" for="img-updateProducts">Chose Image
      <i class="fa-regular fa-file-image"></i>
    </label>
    <input style="display: none;"  id="img-updateProducts" type="file">
    <select  style="cursor: pointer;" id="category-updateProducts">
      <option value="Category">Category</option>
      <option value="Cake & Deserts">Cake & Deserts</option>
      <option value="Bread">Bread</option>
      <option value="Burger & Pizza">Burger & Pizza</option>
      <option value="Cookie & Biscuit">Cookie & Biscuit</option>
      <option value="Donuts">Donuts</option>
    </select>
    <input id="name-updateProducts" value="${result.productName}" placeholder="${result.productName}" type="text">
    <input id="price-updateProducts" value="${result.price}" placeholder="${result.price}" type="text">
    <input id="stock-updateProducts" value="${result.stock}" placeholder="${result.stock}" type="text">
    <button onclick="updateProductsAdmin(${result.id})">Update</button>
    <button onclick="offUpdateProductsAdmin()">Esc</button>
  </div>
  `;
}
function offUpdateProductsAdmin() {
  document.querySelector(".overlay-updateProducts").style.display = "none";
}
function updateProductsAdmin(id) {
  let dbProductsAdmin = JSON.parse(localStorage.getItem("products"));
  let name = document.getElementById("name-updateProducts").value;
  let price = document.getElementById("price-updateProducts").value;
  let stock = document.getElementById("stock-updateProducts").value;
  let img = document.getElementById("img-updateProducts").files[0];
  let category = document.getElementById("category-updateProducts").value;
  console.log(name, "name");
  console.log(price, "price");
  console.log(stock, "stock");
  console.log(category, "Category");
  console.log(img, "img");
  if (category == "Category") {
    alert("Must choose Category");
  }
  if (document.getElementById("img-updateProducts").files.length == 0) {
    alert("Please choose Image first");
  } else {
    if (confirm("Have you carefully checked the products information?")) {
      let newDbProductsAdmin = dbProductsAdmin.findIndex(
        (item) => item.id == id
      );
      dbProductsAdmin[newDbProductsAdmin] = {
        category: category,
        desc: "mo ta",
        id: id,
        img: `../assets/images/cake2/${img.name}`,
        isDelete: 1,
        price: price,
        productName: name,
        stock: stock,
      };
      localStorage.setItem("products", JSON.stringify(dbProductsAdmin));
      alert("Update products SUCCESS");
    }
  }
  document.querySelector(".overlay-updateProducts").style.display = "none";
  renderProductsAdmin();
}
// Update Products
// Products











// Orders
// Render Orders
function renderStatusOrders(statusOrder) {
  let result;
  switch (statusOrder) {
    case 1:
      result = "Confirmed";
      break;
    case 2:
      result = "Delivering";
      break;    
    case 3:
      result = "Finish";
      break;    
    case 4:
      result = "Canceled";
      break;
  }
  return result;
}
function renderOrderAdmin(page = 1) {
  let dbOrderAdmin = JSON.parse(localStorage.getItem("orders"));
  let listOrder = document.getElementById("list-orders");
  let currentPage = (page - 1) * 3
  let result = dbOrderAdmin.splice(currentPage, 3)
  listOrder.innerHTML = "";
  result.forEach((item, index) => {
    listOrder.innerHTML += `
        <tr>
            <td>${
              page === 1 ?
              `${index + 1} `
              : `${(index  + 1 + 3) * (page -1)}`
            }</td>
            <td>${item.date}</td>
            <td>${item.idUser}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>${item.totalPrice.toLocaleString() + " VND"}</td>
            <td>${renderStatusOrders(item.status)}</td>
            <td>
                <button onclick="modelDetailOrder(${item.id})" type="submit">view</button>
                <button onclick="onModelUpdateOrder(${item.id})" type="submit">edit</button>
            </td>
        </tr>
            `;
  });
}
// Render number pagination 
function renderPageOrder(OrderOnePage,totalOrder){
  let result = Math.ceil(totalOrder/OrderOnePage)
  let numberList = document.getElementById('pageOrder')
  console.log(numberList);
  numberList.innerHTML = ""
  for (let index = 1; index <= result; index++) {
    numberList.innerHTML += 
    `
    <span onclick="renderOrderAdmin(${index})">${index}</span>
    `
  }
  console.log(numberList.innerHTML);
}

// Render list number pagination 
function renderUiPageOrder(){
  let dbOrderAdmin = JSON.parse(localStorage.getItem("orders"));

  let pagination = document.querySelector('#paginationOrder');
  console.log(pagination);
  pagination.innerHTML =  `
    <div id="pageOrder" class="page">    
    </div>
  `
  renderPageOrder(3,dbOrderAdmin.length)
}
renderUiPageOrder()

// Render details order
function modelDetailOrder(id) {
  document.querySelector(".overlay-detailsProducts").style.display = "flex";
  let dbOrderAdmin = JSON.parse(localStorage.getItem("orders"));

  let newDbOrderAdmin = dbOrderAdmin.find(item => item.id == id)
  console.log(newDbOrderAdmin);
  let listDetails = document.querySelector(".detailsProducts");
  listDetails.innerHTML = ""
  newDbOrderAdmin.cartOrder.forEach(item => {
    listDetails.innerHTML += 
    `
    <li>
      <img src="../../../${item.img}" alt=""/>
      <p>${item.productName}</p>
      <span>${item.quantity}</span>
      <p>${(item.quantity * item.price).toLocaleString() + " VND"}</p>
    </li>
    `
  })
}
function offModelDetailOrder(){
  document.querySelector(".overlay-detailsProducts").style.display = "none";
}


function onModelUpdateOrder(id){
  document.querySelector('.overlay-popUpOrder').style.display = "flex"
  let dbOrderAdmin = JSON.parse(localStorage.getItem('orders'))
  let popUpOrder = document.querySelector('.overlay-popUpOrder')
  let newDbOrderAdmin = dbOrderAdmin.find(item => item.id == id)
    popUpOrder.innerHTML = 
    `
    <div class="popUpUpdateOrder">
      <input value="${newDbOrderAdmin.address}" id="address" placeholder="${newDbOrderAdmin.address}" type="text">
      <input value="${newDbOrderAdmin.phone}" id="phone" placeholder="${newDbOrderAdmin.phone}" type="text">
      <select id="update-order">
        <option>status</option>
        <option value="1">1 Confirmed</option>
        <option value="2">2 Delivering</option>
        <option value="3">3 Finish</option>
      </select>
        <button onclick="updateOrder(${newDbOrderAdmin.id})">Update</button>
        <button onclick="offUpdateOrder()">Esc</button>
    </div>
    `
}
function offUpdateOrder(){
  document.querySelector('.overlay-popUpOrder').style.display = "none"
}
function updateOrder(id) {
  let dbOrderAdmin = JSON.parse(localStorage.getItem('orders')) 
  let address = document.getElementById('address').value;
  let phone = document.getElementById('phone').value;
  let status = document.getElementById('update-order').value;
  if (phone.length != 9 || isNaN(phone)) {
    alert('Phone Wrong')
  }else{
    if (status == "status") {
      alert('You must choose status')
    }else{
      if (confirm('You SURE Update?')) {
        let newDbOrderAdmin = dbOrderAdmin.findIndex(item => item.id == id)
        let result = {
          ...dbOrderAdmin[newDbOrderAdmin],
          address: address,
          phone: phone,
          status: +status,
        }
        dbOrderAdmin[newDbOrderAdmin] = result
        localStorage.setItem('orders',JSON.stringify(dbOrderAdmin))
        alert('Update SUCCESS')
      }
    }
  }
  document.querySelector('.overlay-popUpOrder').style.display = "none"
  renderOrderAdmin()
}
// Order


