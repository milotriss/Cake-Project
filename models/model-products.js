const products = [
  {
    id: 1,
    productName: "British Victoria Sandwich",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/British Victoria Sandwich Sponge cake 维多利亚海绵蛋糕.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 2,
    productName: "Caramel Pudding Cake",
    price: "39000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/Caremel Pudding cake焦糖布丁蛋糕.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 3,
    productName: "Chocolate and Caramel Mousse Cake",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/Chocolate and Caramel Mousse Cake - Julie Marie Eats.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 4,
    productName: "Oreo Cake",
    price: "59000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/Oreo cake 奥利奥蛋糕.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 5,
    productName: "Pumpkin Yogurt Cake",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/pumpkin yogurt cake 南瓜酸奶蛋糕.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 6,
    productName: "Sweet Tooth Girl (2 pieces)",
    price: "29000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/Sweet Tooth Girl.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 7,
    productName: "Snack Cake",
    price: "59000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/Snack Cakes.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 8,
    productName: "Rice Cake",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cake&deserts/三色米糕 Chinese rice cake photography.jpeg",
    desc: "mo ta",
    category: "Cake & Deserts",
  },
  {
    id: 9,
    productName: "Loaf Soughdough",
    price: "129000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/5a036831-73fc-4730-827d-c43b3f6c3b6d.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 10,
    productName: "Cinamon Roll",
    price: "39000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/Bread & Olives.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 11,
    productName: "Pain Au Chocolate",
    price: "59000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/chocolate crossiant 巧克力可颂.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 12,
    productName: "Focaccia-Gaz Oakley (25x30)",
    price: "139000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/Focaccia - Gaz Oakley.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 13,
    productName: "Maritozzi-Cream",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/Maritozzi.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 14,
    productName: "Croisant Blank",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/Rezept von Nima Hemmat-Azad_ Croissant _ Kochbücher & ihre besten Rezepte.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 15,
    productName: "Toast Bread",
    price: "99000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/bread/Toast bread 吐司🍞.jpeg",
    desc: "mo ta",
    category: "Bread",
  },
  {
    id: 16,
    productName: "Bacon and Beef Burger",
    price: "89000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/burger&pizza/baconbeefbuger.jpeg",
    desc: "mo ta",
    category: "Burger & Pizza",
  },
  {
    id: 17,
    productName: "Chicken Burger",
    price: "79000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/burger&pizza/chikenburger.jpeg",
    desc: "mo ta",
    category: "Burger & Pizza",
  },
  {
    id: 18,
    productName: "Pizza Popolaze",
    price: "129000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/burger&pizza/pizapopolaze.jpeg",
    desc: "mo ta",
    category: "Burger & Pizza",
  },
  {
    id: 19,
    productName: "Seafood Pizza",
    price: "159000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/burger&pizza/seafoodpizza.jpeg",
    desc: "mo ta",
    category: "Burger & Pizza",
  },
  {
    id: 20,
    productName: "Sunflower Seed Veggie Burger",
    price: "89000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/burger&pizza/Sunflower Seed Veggie Burgers.jpeg",
    desc: "mo ta",
    category: "Burger & Pizza",
  },
  {
    id: 21,
    productName: "Vegan Mozzarella Mushroom Burger",
    price: "99000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/burger&pizza/Vegan Mozzarella Mushroom Burger.jpeg",
    desc: "mo ta",
    category: "Burger & Pizza",
  },
  {
    id: 22,
    productName: "Brownie Crinkle Cookies (box)",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/Brownie Crinkle Cookies — The Boy Who Bakes.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 23,
    productName: "Chocolate cookies (box)",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/chocolate cookies photography 巧克力曲奇.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 24,
    productName: "Chocolate Hazelnut Cookie (box)",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/Chocolate Hazelnut Sandwich Cookies - Browned Butter Blondie.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 25,
    productName: "Cookie Sandwich Vanilla (box)",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/cookie sandwich.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 26,
    productName: "Lemon Butter Cookie (box)",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/lemon butter cookies 柠檬黄油曲奇饼干.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 27,
    productName: "Paleo Coconut Peppermint Patties (box)",
    price: "49000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/Paleo Coconut Peppermint Patties - Delight Fuel.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 28,
    productName: "Scone (2 pieces)",
    price: "39000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/cookie&biscuit/scone photography 司康.jpeg",
    desc: "mo ta",
    category: "Cookie & Biscuit",
  },
  {
    id: 29,
    productName: "Baked Lemon Curd Filled Donuts",
    price: "29000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Baked Lemon Curd Filled Donuts - Island Bakes.jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
  {
    id: 30,
    productName: "Bunny Donuts — Sarah Makes Stuff",
    price: "29000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Bunny Donuts — Sarah Makes Stuff.jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
  {
    id: 31,
    productName: "Coconut Donuts",
    price: "29000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Coconut Donuts.jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
  {
    id: 32,
    productName: "Key Lime Coconut Donuts",
    price: "29000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Key Lime Coconut Donuts - Baker by Nature.jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
  {
    id: 33,
    productName: "Oreo Cookies and Cream Donuts",
    price: "35000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Oreo Cookies and Cream Donuts - Baker by Nature.jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
  {
    id: 34,
    productName: "Mix Donuts (4 pieces random)",
    price: "116000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Red Velvet Donuts (Recipe).jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
  {
    id: 35,
    productName: "Vegan Chocolate Marble Glaze",
    price: "29000",
    stock: 19, // ton kho
    isDelete: 1, //soft delete //cho admin 2, cho user 1
    img: "../assets/images/donuts/Vegan Chocolate Marble Glaze - Delight Fuel.jpeg",
    desc: "mo ta",
    category: "Donuts",
  },
];

if (!JSON.parse(localStorage.getItem("products"))) {
  localStorage.setItem("products", JSON.stringify(products));
  
}
