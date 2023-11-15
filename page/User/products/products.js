const productService = new ProductService();
function renderProducts() {
  let db = getAllItems("products");

  let listCake = document.getElementById("products__items");
  listCake.innerHTML = "";
  db.forEach(function (item, index) {
    listCake.innerHTML += `<figure>
        <img onclick="renderDetails(${item.id})" src="../../${item.img}" alt="">
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.price.toLocaleString() + " VND"}</p>
          <span>Con lai: ${item.stock}</span>
          <div class="details__add">
            <button onclick="onAddCart(${item.id},${index})">ADD+</button>
            <input value="1" min="1" max="${item.stock}" class="quantity-products" type="text" />
          </div>
        </figcaption>
      </figure>`;
  });
}
// renderProducts()
// link page
//
//

// giu active cho category
let listCategory = document.querySelectorAll(".list-category");
listCategory.forEach((item) => {
  item.addEventListener("click", function () {
    listCategory.forEach((item) => {
      item.classList.remove("active-category");
    });
    let listCategoryValue = item.innerText;
    if (listCategoryValue != "All") {
      renderCategory(listCategoryValue);
    } else {
      renderProducts();
    }
    item.classList.add("active-category");
  });
});
function renderDetails(id) {
  window.location.href = `../details/details.html?id=${id}`;
}

function renderCategory(data) {
  const category = productService.getProductsByClickCategory(data);
  let listCake = document.getElementById("products__items");
  listCake.innerHTML = "";
  category.forEach(function (item, index) {
    listCake.innerHTML += `<figure>
        <img onclick="renderDetails(${item.id})" src="../../${item.img}" alt="">
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.price.toLocaleString() + " VND"}</p>
          <span>Con lai: ${item.stock}</span>
          <div class="details__add">
            <button onclick="onAddCart(${item.id},${index})">ADD+</button>
            <input value="1" min="1" max="${item.stock}" class="quantity-products" type="text" />
          </div>
        </figcaption>
      </figure>`;
  });
}
// renderCategory()

//Search
function onSearch() {
  const keyword = document.querySelector(".search-input").value;
  const products = productService.getProductsBySearchInfo(keyword);
  let listSearch = document.querySelector(".list-search");
  if (keyword.length) {
    document.querySelector(".list-search").style.display = "block";
    listSearch.innerHTML = "";
    products.forEach((item) => {
      listSearch.innerHTML += `
      <li onclick="renderDetails(${item.id})">
        <p>${item.productName}</p>
      </li>
      `;
    });
  } else {
    document.querySelector(".list-search").style.display = "none";
  }
}

// Add cart(products)
function onAddCart(id, index) {
  let dbUserClone = getAllItems("userClone");
  let dbUsers = getAllItems("users");

  let inputResult = document.querySelectorAll(".quantity-products")[index].value;
  if (inputResult == "") {
    alert("hay nhap so luong san pham ban muon them vao gio hang");
  }

  let dbProduct = getAllItems("products");
  let myProducts = dbProduct.find((item) => {
    return item.id == id;
  });

  if (myProducts.stock < inputResult) {
    return alert("Sarn pham k du");
  }

  let checkIndex = dbUsers.findIndex((item, index) => {
    return item.id == dbUserClone.id;
  });
  if (checkIndex != -1) {
    
    const cart = dbUsers[checkIndex].carts;

    let checkProducts = cart.findIndex((item) => item.id == id);

    if (checkProducts != -1) {
      let result = dbUsers[checkIndex].carts.map((item, index) => {
        if (index == checkProducts) {
          // console.log(item.quantity, inputResult);
          // console.log(+item.quantity + +inputResult);
          return {
            ...item,
            quantity: +item.quantity + +inputResult,
          };
        }
        return item;
      });
      dbUsers[checkIndex].carts = result
      // console.log(dbUsers);
      localStorage.setItem("users", JSON.stringify(dbUsers));
    } else {
      dbUsers[checkIndex].carts.push({
        ...myProducts,
        quantity: Number(inputResult),
      });
      console.log(dbUsers);

      localStorage.setItem("users", JSON.stringify(dbUsers));
    }
  } else {
    alert("ban hay dang nhap");
  }
  renderCount()
}
