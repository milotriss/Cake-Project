//renderDetailsProducts
function renderDetailProducts(){
    let db = JSON.parse(localStorage.getItem('products'))
    let getUrl = window.location.href
    let id = getUrl.split('=')[1]
    let newDb = db.find((item)=>{
        return item.id == id
    })
    let deTails = document.querySelector('.details')
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

// Add cart(details)
function addCartDetails(id,index){
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

  let checkIndex = dbUsers.findIndex((item,index)=>{
    return item.id == dbUserClone.id
  })


}