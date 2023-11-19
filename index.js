function renderMainSidebar() {
  const mainSidebar = document.getElementById("nav");
  mainSidebar.innerHTML = `
    <div class="sidebar">
    <i class="fa-solid fa-bars fa-beat-fade"></i>
  </div>
  <div class="nav__top">
    <ul>
      <li>
        <a onclick="backHome()">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="./page/User/location/contact.html">
          <i class="fa-solid fa-location-dot"></i>
          <span>Contact</span>
        </a>
      </li>
      <li>
        <a href="./page/User/products/products.html">
          <i class="fa-solid fa-store"></i>
          <span onclick="backShop()">Shop</span>
        </a>
      </li>
      <li>
        <a>
          <i class="fa-solid fa-cake-candles"></i>
          <span>Event</span>
        </a>
      </li>
      <li>
        <a>
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
renderMainSidebar();

function renderMainHeader() {
  const header = document.getElementById("main-header");
  header.innerHTML = `
  <img onclick="backHome()"
  src="https://toppng.com/uploads/preview/image-library-library-cupcake-birthday-cake-torte-simple-bakery-cupcake-logo-11562961286zthqttjrf1.png"
  alt="logo"
  />
  <div id="profile">
    <button class="login-btn" onclick="loginHeader()" type="submit">Login</button>
  </div>`;
}
renderMainHeader();



// Chuyen huong
function loginHeader(){
  window.location.href = "http://127.0.0.1:5501/page/user/login/login.html"; 
}
function login() {
  let dbUserClone = JSON.parse(localStorage.getItem('userClone'))
  console.log(dbUserClone);
  if (dbUserClone == {}) {
    window.location.href = "http://127.0.0.1:5501/page/user/login/login.html"; 
  }else{
    window.location.href = "http://127.0.0.1:5501/page/user/products/products.html";
  }
}
function backHome() {
  event.preventDefault()
  window.location.href = "http://127.0.0.1:5501/index.html";
}
function backShop() {
  event.preventDefault()
  window.location.href = "http://127.0.0.1:5501/page/user/products/products.html";
}
function toHistory(){
  event.preventDefault()
  window.location.href = "http://127.0.0.1:5501/page/user/history/history.html";
}
function backCart(){
  event.preventDefault()
  window.location.href = "http://127.0.0.1:5501/page/user/cart/cart.html";
}
function backHistory(){
  window.location.href = "http://127.0.0.1:5501/page/user/history/history.html"
}
function goToCart(){
  window.location.href = "http://127.0.0.1:5501/page/user/cart/cart.html"
}

// active cho 3 cham //
const dots = document.querySelectorAll(".home__dot");
const itemActive = document.querySelectorAll(".item__active");
dots.forEach((item, index) => {
  item.addEventListener("click", function () {
    dots.forEach((item) => {
      item.classList.remove("active");
    });
    itemActive.forEach((item) => {
      item.classList.remove("active");
    });
    //xoá hết active trước khi thêm vào

    item.classList.add("active");
    itemActive[index].classList.add("active");
  });
});

function renderLogout(){
  let dbUserClone = JSON.parse(localStorage.getItem('userClone'))
  let profile = document.getElementById('profile')
  if (dbUserClone.length != 0) {
    profile.innerHTML = 
    `
      <span onclick="toHistory()" >Hi, ${dbUserClone.name}</span>
      <p onclick="logout()">Logout</p>
      <i id="icon-cart" onclick="goToCart()" class="fa-solid fa-cart-plus">
      </i>
    `
  }else {

  }
}
renderLogout()

function logout(){
  let dbUserClone = JSON.parse(localStorage.getItem('userClone'))
  if (confirm("Are you SURE about that!!!") == true){
    dbUserClone=[]
    localStorage.setItem('userClone',JSON.stringify(dbUserClone))
    window.location.href = "http://127.0.0.1:5501/index.html"
    renderLogout()
  }
}

function renderCount(){
  let dbUsers = JSON.parse(localStorage.getItem('users'))
  let dbUserClone = JSON.parse(localStorage.getItem('userClone'))
  let count = document.getElementById('icon-cart')
  // console.log(dbUsers);
  let newDbUser = dbUsers.find(item => item.id == dbUserClone.id)
  count.innerHTML = 
  `
  <div id="count-cart">${newDbUser.carts.length}</div>
  `
}
renderCount()