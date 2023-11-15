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
          <span>Shop</span>
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
  <img
  src="https://toppng.com/uploads/preview/image-library-library-cupcake-birthday-cake-torte-simple-bakery-cupcake-logo-11562961286zthqttjrf1.png"
  alt=""
  />
  <div id="profile">
    <button class="login-btn" onclick="login()" type="submit">Login</button>
  </div>`;
}
renderMainHeader();

//Render nut login thanh logout
// let btnLogin = document.querySelector('.profile')
// console.log(btnLogin);


// Chuyen huong
function login() {
  window.location.href = "http://127.0.0.1:5501/page/user/login/login.html";
}
function backHome() {
  window.location.href = "http://127.0.0.1:5501/index.html";
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
      <span>Hi, ${dbUserClone.name}</span>
      <p onclick="logout()">Logout</p>
      <i class="fa-solid fa-cart-plus">
        <div id="count-cart">1</div>
      </i>
    `
  }
}
renderLogout()
function logout(){
  let dbUserClone = JSON.parse(localStorage.getItem('userClone'))
  dbUserClone=[]
  localStorage.setItem('userClone',JSON.stringify(dbUserClone))
  window.location.reload()
}