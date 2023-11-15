//renderDetailsProducts
function renderDetailProducts(){
    let db = JSON.parse(localStorage.getItem('products'))
    console.log(db);
    let getUrl = window.location.href
    let id = getUrl.split('=')[1]
    console.log(id);
    let newDb = db.find(item=>{
        return item.id == id
    })
    // console.log(newDb);
    let deTails = document.querySelector('.details')
    console.log(deTails);
    deTails.innerHTML= `<div class="details__left">
    <img src="../../../${newDb.img}" alt="" />
  </div>
  <div class="details__right">
    <h1>${newDb.productName}</h1>
    <h6>${newDb.price}</h6>
    <p>
      mo ta san pham: Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Dolorum molestias, voluptas minus consequuntur dolorem
      placeat eum tenetur, amet at libero dolor. Rem cumque, eligendi
      ipsum dolores aliquam facere maxime ab!
    </p>
    <p>
      thanh phan: Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Qui ratione obcaecati, placeat architecto consequatur cumque
      saepe asperiores? Nulla facilis aliquid nisi ullam, ipsa
      asperiores. Soluta quasi necessitatibus quia accusantium. Omnis.
    </p>
    <span>San pham con: ${newDb.stock}</span>
    <div class="details__right-add">
      <button onclick="addCart()">ADD+</button>
      <div class="details__right-quantity">
        <input class="input-cart" type="text" />
      </div>
    </div>
    <div class="details__right-brands">
      <i title="Facebook" class="ti-facebook"></i>
      <i title="Youtube" class="ti-youtube"></i>
      <i title="Pinterest" class="ti-pinterest"></i>
      <i title="Instagram" class="ti-instagram"></i>
      <i title="Twitter" class="ti-twitter"></i>
    </div>
  </div>`

    // console.log(newDb);
    // console.log(db);
    let hintProducts = db.filter(item =>{
      return item.category == newDb.category
    })
    // console.log(hintProducts);
    let listHintProducts = document.querySelector('.products')
    // console.log(listHintProducts);

    listHintProducts.innerHTML = ''
    let hintProductsList = hintProducts.forEach(item => {
      if (newDb.productName != item.productName) {
        listHintProducts.innerHTML +=
        `
        <figure class="hint-products">
        <img onclick="renderDetails(${item.id})" src="../../../${item.img}" alt="" />
        <figcaption>
          <h1>${item.productName}</h1>
          <p>${item.desc}</p>
          <span>${item.price}</span>
        </figcaption>
      </figure>
        `
      }
    });

}
renderDetailProducts()