"use strict";
const productName = "DELL";
const price = 30000;
const isAvaliable = true;
var Category;
(function (Category) {
    Category[Category["Electronics"] = 0] = "Electronics";
    Category[Category["Clothing"] = 1] = "Clothing";
    Category[Category["Grocery"] = 2] = "Grocery";
})(Category || (Category = {}));
const products = [
    {
        productName: productName,
        price: price,
        isAvaliable: isAvaliable,
        category: Category.Clothing,
    },
];
console.log(products);
