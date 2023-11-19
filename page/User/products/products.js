const productService = new ProductService();
function renderProducts() {
  let dbProduct = getAllItems("products");

  let listCake = document.getElementById("products__items");
  listCake.innerHTML = "";
  dbProduct.forEach(function (item, index) {
    if (item.isDelete == 1) {
      listCake.innerHTML += `<figure>
          <img onclick="renderDetails(${item.id})" src="../../${item.img}" alt="">
          <figcaption>
            <h1>${item.productName}</h1>
            <p style="font-family: 'Lobster Two', sans-serif;">${(item.price).toLocaleString() + " VND"}</p>
            <span>Stock: ${item.stock}</span>
            <div class="details__add">
              <button onclick="onAddCart(${item.id},${index})">ADD+</button>
              <input value="1" min="1" max="${item.stock}" class="quantity-products" type="text" />
            </div>
          </figcaption>
        </figure>`;
    }
  });
}


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
  category.forEach((item, index)=>{
    if (item.isDelete == 1) {
      listCake.innerHTML += `<figure>
          <img onclick="renderDetails(${item.id})" src="../../${item.img}" alt="">
          <figcaption>
            <h1>${item.productName}</h1>
            <p style="font-family: 'Lobster Two', sans-serif;">${(item.price).toLocaleString() + " VND"}</p>
            <span>Con lai: ${item.stock}</span>
            <div class="details__add">
              <button onclick="onAddCart(${item.id},${index})">ADD+</button>
              <input value="1" min="1" max="${item.stock}" class="quantity-products" type="text" />
            </div>
          </figcaption>
        </figure>`;
    }
  });
}

//Search
function onSearch() {
  const keyword = document.querySelector(".search-input").value;
  const products = productService.getProductsBySearchInfo(keyword);
  let listSearch = document.querySelector(".list-search");
  if (keyword.length) {
    document.querySelector(".list-search").style.display = "block";
    listSearch.innerHTML = "";
    products.forEach((item) => {
      if (item.isDelete == 1) {
        listSearch.innerHTML += `
        <li onclick="renderDetails(${item.id})">
          <p>${item.productName}</p>
        </li>
        `;
      }
    });
  } else {
    document.querySelector(".list-search").style.display = "none";
  }
}

// Add cart(products)
function onAddCart(id, index) {
  let dbUserClone = getAllItems("userClone");
  let dbUsers = getAllItems("users");
  let dbProduct = getAllItems("products");
  let inputResult = document.querySelectorAll(".quantity-products")[index].value;

  if (inputResult == 0 || inputResult == "") {
    return alert('Quantity INCORRECT!')
  }

  let myProducts = dbProduct.find((item) => item.id == id);

  if (myProducts.stock < inputResult) {
    return alert(`We only have ${myProducts.stock} left for this product, so SORRY!`);
  }

  let checkIndex = dbUsers.findIndex((item, index) => item.id == dbUserClone.id);
  if (checkIndex != -1) {
    const cart = dbUsers[checkIndex].carts;
    let checkProducts = cart.findIndex(item => item.id == id);
    if (checkProducts != -1) {
      let result = dbUsers[checkIndex].carts.map((item, index) => {
        if (index == checkProducts) {
          return {
            ...item,
            quantity: +item.quantity + +inputResult,
          };
        }
        return item;
      });
      dbUsers[checkIndex].carts = result
      localStorage.setItem("users", JSON.stringify(dbUsers));
    } else {
      dbUsers[checkIndex].carts.push({
        ...myProducts,
        quantity: Number(inputResult),
      });
      localStorage.setItem("users", JSON.stringify(dbUsers));
    }
  } else {
    return alert("Please LOGIN first!");
  }
  renderCount()
}
