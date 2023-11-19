function renderStatusOrder(statusOrder) {
  let result;
  switch (statusOrder) {
    case 1:
      result = "Confirmed";
      break;
    case 2:
      result = "Delivering";
      break;    
    case 3:
      result = "Finish";
      break;    
  }
  return result;
}
function renderHistory() {
  let dbOrders = JSON.parse(localStorage.getItem("orders"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));

  let myOrder = dbOrders.filter((item) => item.idUser == dbUserClone.id);
  let historyList = document.querySelector(".history__list");
  historyList.innerHTML = "";
  myOrder.forEach((item, index) => {
    historyList.innerHTML += `
        <li>
            <span>${+[index] + +1}</span>
            <span>${item.date}</span>
            <button onclick="popUpHistory(${item.id})">Details Order</button>
            <span>${renderStatusOrder(item.status)}</span>
            <p>${item.totalPrice.toLocaleString() + " VND"}</p>
        </li>
        `;
  });
}

//
function popUpHistory(id) {
  document.querySelector(".popup__list").style.display = "flex";
  document.querySelector(".history").style.display = "none";

  let popUpHistoryList = document.querySelector(".popup__history");
  popUpHistoryList.innerHTML = "";
  let dbOrders = JSON.parse(localStorage.getItem("orders"));
  let dbUserClone = JSON.parse(localStorage.getItem("userClone"));

  let myOrder = dbOrders.filter((item) => item.idUser == dbUserClone.id);
  let myOrderDetails = myOrder.find((item) => item.id == id);
  myOrderDetails.cartOrder.forEach((item) => {
    popUpHistoryList.innerHTML += `
        <li>
            <img src="../../../${item.img}" alt=""/>
            <p>${item.productName}</p>
            <span>${item.quantity}</span>
            <p>${(item.quantity * item.price).toLocaleString() + " VND"}</p>
        </li>
        `;
  });
  document.querySelector(".order__total").innerHTML =
    myOrderDetails.totalPrice.toLocaleString() + " VND";
}

//
function onSearchHistory() {
  let dbOrders = JSON.parse(localStorage.getItem("orders"));

  let input = document.getElementById("search__history").value;
  let listSearch = document.querySelector(".search-order");
  console.log(input);
  if (input != 0) {
    document.querySelector(".search-order").style.display = "flex";
    let newDbOrder = dbOrders.filter((item) => {
      return item.date.toLowerCase().includes(input);
    });
    listSearch.innerHTML = "";
    newDbOrder.forEach((item) => {
      listSearch.innerHTML += `
                <li onclick="popUpHistory(${item.id})">${item.date}</li>
            `;
    });
  } else {
    document.querySelector(".search-order").style.display = "none";
  }
}
