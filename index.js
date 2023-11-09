function renderMainSidebar() {
    const mainSidebar = document.getElementById("nav");
    mainSidebar.innerHTML = `<div class="sidebar">
    <i class="fa-solid fa-bars fa-beat-fade"></i>
  </div>
  <div class="nav__top">
    <ul>
      <li>
        <a href="#">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="">
          <i class="fa-solid fa-location-dot"></i>
          <span>Contact</span>
        </a>
      </li>
      <li>
        <a href="">
          <i class="fa-solid fa-store"></i>
          <span>Shop</span>
        </a>
      </li>
      <li>
        <a href="">
          <i class="fa-solid fa-cake-candles"></i>
          <span>Event</span>
        </a>
      </li>
      <li>
        <a href="">
          <i class="fa-solid fa-shop"></i>
          <span>Workshop</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="nav__bottom">
    <button type="submit">
      <i class="fa-regular fa-star"></i>
    </button>
    <button type="submit">
      <i class="fa-regular fa-heart"></i>
    </button>
    <button type="submit">
      <i class="fa-solid fa-language"></i>
    </button>
  </div>`;
}
renderMainSidebar()

//
function renderMainHeader(){
  const mainHeader = document.getElementById("mainheader")
  mainHeader.innerHTML = `
  <img
  src="https://toppng.com/uploads/preview/image-library-library-cupcake-birthday-cake-torte-simple-bakery-cupcake-logo-11562961286zthqttjrf1.png"
  alt=""
  />
  <div class="login">
    <button onclick="login()" type="submit">Login</button>
    <button type="submit">
      <i class="fa-solid fa-cart-plus"></i>
    </button>
  </div>`
}
renderMainHeader()
//

function login(){
  window.location.href = "./page/User/login/login.html"
}

// active cho 3 cham //
const dots = document.querySelectorAll('.home__dot')
const itemActive = document.querySelectorAll('.item__active')

dots.forEach((item,index)=>{
  item.addEventListener('click', function(){

    //xoá hết active trước khi thêm vào
    dots.forEach(item =>{
      item.classList.remove('active')
    })
    itemActive.forEach(item =>{
      item.classList.remove('active')
    })
    //xoá hết active trước khi thêm vào

    item.classList.add('active')
    itemActive[index].classList.add('active')
  })
})