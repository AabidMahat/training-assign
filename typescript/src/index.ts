// enum EmployeeState {
//   Active,
//   InActive,
//   Probation,
// }

import { createPublicKey } from "crypto";

// interface Employee {
//   id: number;
//   name: string;
//   age: number;
//   status: EmployeeState;
// }

// function createEmployee(
//   id: number,
//   name: string,
//   age: number,
//   status: EmployeeState
// ): Employee {
//   return { id, name, age, status };
// }

// function displayEmployee(employee: Employee) {
//   console.log(employee.id);
//   console.log(employee.name);
//   console.log(employee.age);
//   console.log(employee.status);
// }

// const emp = createEmployee(1, "Aabid", 22, EmployeeState.Active);

// displayEmployee(emp);

interface Address {
  city: string;
  postalCode: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

type location = Address & Coordinates;

let myLocation: location = {
  city: "Kolhapur",
  postalCode: 416010,
  latitude: 50.02,
  longitude: 10.222,
};

const add = (num1: number = 10, num2: number): number => num1 + num2;
console.log(add(12, 15));

console.log(myLocation);

class Box<T> {
  constructor(private content: T) {}

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");

console.log(stringBox.getContent());
