// // Class decorator, logs the class name
// function logClass(target: Function): void {
//   console.log("Class : " + target.name);
// }

// // Method decorator, logs the method name
// function logMethod(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ): void {
//   console.log("Method " + propertyKey);
// }

// @logClass // Applying class decorator
// class MyClass {
//   @logMethod // Applying method decorator
//   myMethod() {
//     console.log("Executing myMethod");
//   }
// }

// const myCLass = new MyClass();
// myCLass.myMethod();

function ReplaceWithProxy<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    proxyEnabled = true;
  };
}

@ReplaceWithProxy
class Order {
  constructor(public id: number, public amount: number) {}
}

const order = new Order(1, 500) as Order & { proxyEnabled: boolean };
console.log(order.proxyEnabled);
