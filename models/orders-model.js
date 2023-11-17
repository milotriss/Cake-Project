const orders = []


if (!JSON.parse(localStorage.getItem('orders'))) {
    localStorage.setItem('orders',JSON.stringify(orders))
}