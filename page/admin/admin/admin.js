let liSideBar = document.querySelectorAll('.list-sidebar')
let itemMain = document.querySelectorAll('.main-none')

liSideBar.forEach((item,index)=>{
    item.addEventListener('click',function(){
        liSideBar.forEach(item=>{
            item.classList.remove('admin-active')
        })
        itemMain.forEach(item=>{
            item.classList.remove('admin-active')
        })
        item.classList.add('admin-active')
        itemMain[index].classList.add('admin-active')
    })
})

// Render info admin

function renderInfoAdmin(){
    let adminInfo = document.querySelector(".admin__info");
    let dbAdminClone = JSON.parse(localStorage.getItem('adminClone'))

    adminInfo.innerHTML = 
    `
    <img src="../../../${dbAdminClone.img}" alt="" />
    <figcaption>
        <h1>${dbAdminClone.name}</h1>
        <p>Position: ...</p>
        <button onclick="logOutAdmin()">Log out</button>
    </figcaption>
    `
}

function logOutAdmin(){
    let dbAdminClone = JSON.parse(localStorage.getItem('adminClone'))
    
    if (confirm('Are you SURE about that!!!') == true) {
        dbAdminClone = {}
        localStorage.setItem('adminClone',JSON.stringify(dbAdminClone))
        window.location.href = "http://127.0.0.1:5501/page/admin/admin-login/admin-login.html"
    }else{
        window.reload()
    }
}


// Render Dashboard
function renderDashboard(){
    let dbProductAdmin = JSON.parse(localStorage.getItem('products'))
    let dbOrderAdmin = JSON.parse(localStorage.getItem('orders'))
    let dbUserAdmin = JSON.parse(localStorage.getItem('users'))

    let revenueValue = document.querySelector('.revenue-number')
    let totalProducts = document.querySelector('.products-total')
    let totalUsers = document.querySelector('.users-total')

    revenue = 0
    dbOrderAdmin.forEach(item=>{
        revenue += item.totalPrice
    })
    revenueValue.innerHTML = `${revenue.toLocaleString()+" VND"}`

    totalProducts.innerHTML = `${dbProductAdmin.length}`

    totalUsers.innerHTML = `${dbUserAdmin.length}`
}

// Render User
function renderListOfUser(){
    let dbUserAdmin = JSON.parse(localStorage.getItem('users'))
    let listUser = document.getElementById('list-users')
    listUser.innerHTML = ""
    dbUserAdmin.forEach((item, index)=>{
        if (item.role == 2) {
            listUser.innerHTML +=
            `
            <tr>
                <td>${0+[index]}</td>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.name}</td>
                <td>Active</td>
                <td>
                    <button type="submit">unblock</button>
                    <button type="submit">block</button>
                </td>
            </tr>
            `
        }
    })
}

//Render Admin
function renderListOfAdmin(){
    let dbUserAdmin = JSON.parse(localStorage.getItem('users'))
    let listAdmin = document.getElementById('list-admin')
    listAdmin.innerHTML = ""
    dbUserAdmin.forEach((item, index)=>{
        if (item.role == 1) {
            listAdmin.innerHTML +=
            `
            <tr>
                <td>${0+[index]}</td>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.name}</td>
                <td>Active</td>
                <td>
                    <button type="submit">unblock</button>
                    <button type="submit">block</button>
                </td>
            </tr>
            `
        }
    })
}

//Render Products
function renderProductsAdmin(){
    let dbProductsAdmin = JSON.parse(localStorage.getItem('products'))
    let listProducts = document.getElementById('list-products')
    
    listProducts.innerHTML = ""
    dbProductsAdmin.forEach((item,index)=>{
        listProducts.innerHTML += 
        `
        <tr>
            <td>${+[index]+ +1}</td>
            <td>${item.id}</td>
            <td>${item.productName}</td>
            <td>${item.price.toLocaleString()+ " VND"}</td>
            <td>${item.stock}</td>
            <td id="quantity-sold">9</td>
            <td>
                <button type="submit">view</button>
                <button type="submit">edit</button>
                <button type="submit">delete</button>
            </td>
        </tr>
        `
    })
}

// Render Orders
function renderOrderAdmin(){
    let dbOrderAdmin = JSON.parse(localStorage.getItem('orders'))
    let listOrder = document.getElementById('list-orders')
    listOrder.innerHTML = ""
    dbOrderAdmin.forEach((item,index) =>{
        listOrder.inert += 
        `
        <tr>
            <td>${+[index]+ +1}</td>
            <td>${item.id}</td>
            td>${item.date}</td>
            td>${item.idUser}</td>
            <td>${item.totalPrice}</td>
            <td>${item.status}</td>
            <td>
                <button type="submit">view</button>
                <button type="submit">edit</button>
                <button type="submit">delete</button>
            </td>
        </tr>
            `
        })
}
