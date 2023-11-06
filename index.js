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