"use strict";
// enum EmployeeState {
//   Active,
//   InActive,
//   Probation,
// }
Object.defineProperty(exports, "__esModule", { value: true });
let myLocation = {
    city: "Kolhapur",
    postalCode: 416010,
    latitude: 50.02,
    longitude: 10.222,
};
const add = (num1 = 10, num2) => num1 + num2;
console.log(add(12, 15));
console.log(myLocation);
class Box {
    content;
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("Hello");
console.log(stringBox.getContent());
