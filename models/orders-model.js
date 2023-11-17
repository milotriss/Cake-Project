const orders = [
    // {
    //  xong   carts:[],
    //     idOrder:1,
    //  xong   idUser:1,
    //   xong  totalPrice:123123,
    //  xong   address:'123',
    //   xong  phoneNumber:'123123',
    //   xong  status:1, //1 la da nhan don, 2 dang giao, 3 la thanh cong
    //    xong date:'ngay thanh toan',
    //   xong  payment:1, //1 thanh toasn khi nhan hang, 2 thanh toan onl
    // }
]

if (!JSON.parse(localStorage.getItem('orders'))) {
    localStorage.setItem('orders',JSON.stringify(orders))
}