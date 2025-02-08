"use strict";
function sample(arr) {
    return arr.sort((a, b) => (a > b ? 1 : -1))[arr.length - 1];
}
console.log(sample([1, 2, 3, 4, 5]));
function showDetails(id, name, price) {
    return {
        id,
        name,
        price,
    };
}
console.log(showDetails(1, "Aabid", 20000));
// Question 3
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Delivered"] = "delivered";
})(OrderStatus || (OrderStatus = {}));
function orderFunction(status) {
    switch (status) {
        case "pending": {
            console.log("Shipment is in pending state");
            break;
        }
        case "shipped": {
            console.log("Shipment is in shipped state");
            break;
        }
        case "delivered": {
            console.log("Shipment is delivered state");
            break;
        }
    }
}
orderFunction(OrderStatus.Delivered);
orderFunction(OrderStatus.Pending);
orderFunction(OrderStatus.Shipped);
