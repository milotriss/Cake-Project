function renderProducts() {
  let db = JSON.parse(localStorage.getItem("products"));
  let listCake = document.getElementById("products__items");

  listCake.innerHTML = "";
  db.forEach(function (item, index) {
    listCake.innerHTML += `<figure>
        <img onclick="renderDetails(${item.idProducts})" src="../../${item.img}" alt="">
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.price}</p>
          <span>Con lai: ${item.stock}</span>
          <div class="details__add">
            <button onclick="addCart()" type="submit">ADD+</button>
            <input class="input-cart" min="1" value="1" max="${item.stock}" type="text" />
          </div>
        </figcaption>
      </figure>`;
  });
}
renderProducts()

// link page


// giu active cho category
let listCategory = document.querySelectorAll('.list-category')
listCategory.forEach(item=>{
  item.addEventListener('click',function(){
    listCategory.forEach((item)=>{
      item.classList.remove('active-category')
    })
    let listCategoryValue = item.innerText
    if(listCategoryValue != "All") {
      renderCategory(listCategoryValue)
    }else {
      renderProducts()
    }
    item.classList.add('active-category')
  })
})


// renderCategory
function renderCategory(data){
  let db = JSON.parse(localStorage.getItem("products"));
  let listCake = document.getElementById("products__items");
  listCake.innerHTML = "";
  let newDb = db.filter(item =>{
    return data == item.category
  })
  newDb.forEach(function (item, index) {
    listCake.innerHTML += `<figure>
        <img onclick="renderDetails(${item.idProducts})" src="../../${item.img}" alt="">
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.price}</p>
          <span>Con lai: ${item.stock}</span>
          <div class="details__add">
            <button onclick="addCart()" type="submit">ADD+</button>
            <input class="input-cart" min="1" value="1" max="${item.stock}" type="text" />
          </div>
        </figcaption>
      </figure>`;
  });
}



function renderDetails(id){
  window.location.href = `../details/details.html?id=${id}`
}

