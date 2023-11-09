function renderProducts() {
  let db = JSON.parse(localStorage.getItem("products"));
  let listCake = document.getElementById("products__items");

  listCake.innerHTML = "";
  db.forEach(function (item, index) {
    listCake.innerHTML += `<figure>
        <img src="../../${item.img}" alt="">
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.price}</p>
          <span>Con lai: ${item.stock}</span>
          <div class="details__add">
            <button type="submit">ADD+</button>
            <input min="1" value="1" max="${item.stock}" type="text" />
          </div>
        </figcaption>
      </figure>`;
  });
}
renderProducts()
