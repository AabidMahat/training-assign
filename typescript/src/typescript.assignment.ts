function sample<T>(arr: T[]): T {
  return arr.sort((a, b) => (a > b ? 1 : -1))[arr.length - 1];
}

console.log(sample<number>([1, 2, 3, 4, 5]));

// Question 2

interface Products {
  id: number;
  name: string;
  price: number;
}

function showDetails(id: number, name: string, price: number): Products {
  return {
    id,
    name,
    price,
  };
}

console.log(showDetails(1, "Aabid", 20000));

// Question 3

enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
}

function orderFunction(status: OrderStatus): void {
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
