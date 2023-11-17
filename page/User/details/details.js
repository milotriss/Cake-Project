//renderDetailsProducts
function renderDetailProducts() {
  let db = JSON.parse(localStorage.getItem("products"));
  let getUrl = window.location.href;
  let id = getUrl.split("=")[1];
  console.log(id);
  let newDb = db.find((item) => {
    return item.id == id;
  });
  console.log(newDb);
  let deTails = document.querySelector(".details");
  deTails.innerHTML = `<div class="details__left">
    <img src="../../../${newDb.img}" alt="" />
  </div>
  <div class="details__right">
    <h1>${newDb.productName}</h1>
    <h6 style="font-family: 'Lobster Two', sans-serif;">${(newDb.price).toLocaleString() + " VND"}</h6>
    <p>
      <strong style="text-transform: uppercase; ">Product Description:</strong> <br> Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Dolorum molestias, voluptas minus consequuntur dolorem
      placeat eum tenetur, amet at libero dolor. Rem cumque, eligendi
      ipsum dolores aliquam facere maxime ab!
    </p>
    <p>
      <strong style="text-transform: uppercase;">Ingredient:</strong> <br> Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Qui ratione obcaecati, placeat architecto consequatur cumque
      saepe asperiores? Nulla facilis aliquid nisi ullam, ipsa
      asperiores. Soluta quasi necessitatibus quia accusantium. Omnis.
    </p>
    <span>Stock: ${newDb.stock}</span>
    <div class="details__right-add">
      <button onclick="addCartDetails(${newDb.id})">ADD+</button>
      <div class="details__right-quantity">
        <input value="1" min="1" max="${newDb.stock}" class="quantity-products" type="text" />
      </div>
    </div>
    <div class="details__right-brands">
      <i title="Facebook" class="ti-facebook"></i>
      <i title="Youtube" class="ti-youtube"></i>
      <i title="Pinterest" class="ti-pinterest"></i>
      <i title="Instagram" class="ti-instagram"></i>
      <i title="Twitter" class="ti-twitter"></i>
    </div>
  </div>`;

  // console.log(newDb);
  // console.log(db);
  let hintProducts = db.filter((item) => {
    return item.category == newDb.category;
  });
  // console.log(hintProducts);
  let listHintProducts = document.querySelector(".products");
  // console.log(listHintProducts);

  listHintProducts.innerHTML = "";
  let hintProductsList = hintProducts.forEach((item) => {
    if (newDb.productName != item.productName) {
      listHintProducts.innerHTML += `
        <figure class="hint-products">
        <img onclick="renderDetails(${item.id})" src="../../../${item.img}" alt="" />
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.desc}</p>
          <span style="font-family: 'Lobster Two', sans-serif;">${(item.price).toLocaleString() + " VND"}</span>
        </figcaption>
      </figure>
        `;
    }
  });
}
renderDetailProducts();

// Add cart(details)
function addCartDetails(id) {
  let dbUserClone = getAllItems("userClone");
  let dbUsers = getAllItems("users");
  let dbProduct = getAllItems("products");
  let inputResult = document.querySelector(".quantity-products").value;

  if (dbUserClone.length == 0) {
    return alert('Please LOGIN first!')
  }

  let myProducts = dbProduct.find((item) => {
    return item.id == id;
  });

  if (inputResult == 0 || inputResult == "") {
    alert('Quantity INCORRECT!')
  }

  if (myProducts.stock < inputResult) {
    return alert(`We only have ${myProducts.stock} left for this product, so SORRY!`);
  }

  let myUser = dbUsers.find((item) => {
    return item.id == dbUserClone.id;
  });
  let checkIndex = dbUsers.findIndex((item, index) => {
    return item.id == dbUserClone.id;
  });

    let checkCart = myUser.carts.findIndex((item) => item.id == myProducts.id);
    if (checkCart != -1) {
      let result = dbUsers[checkIndex].carts.map((item, index) => {
        if (index == checkCart) {
          return {
            ...item,
            quantity: +item.quantity + +inputResult,
          };
        }
        return item;
      });
      dbUsers[checkIndex].carts = result;
      localStorage.setItem("users", JSON.stringify(dbUsers));
    } else {
      dbUsers[checkIndex].carts.push({
        ...myProducts,
        quantity: Number(inputResult),
      });
      console.log(dbUsers);
      localStorage.setItem("users", JSON.stringify(dbUsers));
    }
  renderCount();
}
