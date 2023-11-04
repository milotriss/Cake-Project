function renderSidebar() {
    const adminSidebar = document.getElementById("admin__sidebar");
    adminSidebar.innerHTML = `<section class="admin">
    <figure class="admin__info">
        <img src="../../../assets/images/cake/admin.jpeg" alt="">
        <figcaption>
            <h1>Lam Nhat Tien</h1>
            <p>Position: ...</p>
            <button>Log out</button>
        </figcaption>
    </figure>
</section>
<section class="sidebar__info">
    <ul>
        <li>
            <a href="">
                <i class="ti-view-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-user"></i>
                <span>Users</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-dropbox"></i>
                <span>Products</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-receipt"></i>
                <span>Orders</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-comments"></i>
                <span>Reviews</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-image"></i>
                <span>Banners</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-receipt"></i>
                <span>Vouchers</span>
            </a>
        </li>
        <li>
            <a href="">
                <i class="ti-settings"></i>
                <span>Setting</span>
            </a>
        </li>
    </ul>
</section>`;
}
renderSidebar()