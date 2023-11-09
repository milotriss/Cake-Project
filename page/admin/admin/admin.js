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