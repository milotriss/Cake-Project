function renderHistory(){
    let dbOrders = JSON.parse(localStorage.getItem('orders'));

    let historyList = document.querySelector('.history__list');
    historyList.innerHTML = ""
    dbOrders.forEach((item,index) => {
        switch (item.status) {
            case 2: 
            item.status = 'Working...'
                break;
            case 3: 
            item.status = 'Shipping...'
                break;
            case 4: 
            item.status = 'Delivered and Paid'
                break;
            default:
                item.status = 'Order CONFIRMED'
                break;
        }
        historyList.innerHTML +=  
        `
        <li>
            <span>${[index]+1}</span>
            <span>${item.date}</span>
            <button onclick="popUpHistory(${item.id})">History products</button>
            <span>${item.status}</span>
            <p>${(item.totalPrice).toLocaleString() + " VND"}</p>
        </li>
        `
    });
}

//
function popUpHistory(id){
    document.querySelector('.popup__list').style.display = "flex"
    document.querySelector('.history').style.display = "none"
    
    let dbOrders = JSON.parse(localStorage.getItem('orders'));
    let popUpHistoryList = document.querySelector('.popup__history');
    console.log(dbOrders);
    popUpHistoryList.innerHTML=""
    let newDbOrder = dbOrders.find(item => item.id == id)
    console.log(newDbOrder);
    newDbOrder.cartOrder.forEach(item =>{
        popUpHistoryList.innerHTML += 
        `
        <li>
            <img src="../../../${item.img}" alt=""/>
            <p>${item.productName}</p>
            <span>${item.quantity}</span>
            <p>${(item.quantity * item.price).toLocaleString() + " VND"}</p>
        </li>
        `
    })
    dbOrders.forEach((item,index) => {
    document.querySelector('.order__total').innerHTML = (item.totalPrice).toLocaleString() + " VND"
    })
}

// 
function onSearchHistory(){
    let dbOrders = JSON.parse(localStorage.getItem('orders'));

    let input = document.getElementById('search__history').value;
    let listSearch = document.querySelector('.search-order')
    console.log(input);
    if (input != 0) {
        document.querySelector('.search-order').style.display = "flex"
        let newDbOrder = dbOrders.filter(item =>{
            return item.date.toLowerCase().includes(input)
        })
        listSearch.innerHTML = ""
        newDbOrder.forEach(item =>{
            listSearch.innerHTML += 
            `
                <li onclick="popUpHistory(${item.id})">${item.date}</li>
            `
        })
    }else{
        document.querySelector('.search-order').style.display = "none"
    }
}
