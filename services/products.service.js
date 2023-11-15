class ProductService {
  getProductsByClickCategory(data) {
    let db = getAllItems("products");
    let newDb = db.filter((item) => {
      return data == item.category;
    });
    return newDb;
  }
  getProductsBySearchInfo(keyword) {
      let db = getAllItems('products');
      let products = db.filter(item=>{
          return item.productName.toLowerCase().includes(keyword)
        })
        return products;
      }
}
