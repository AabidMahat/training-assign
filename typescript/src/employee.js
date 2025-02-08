"use strict";
var Role;
(function (Role) {
    Role[Role["Manager"] = 0] = "Manager";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Designer"] = 2] = "Designer";
    Role[Role["Tester"] = 3] = "Tester";
    Role[Role["HR"] = 4] = "HR";
})(Role || (Role = {}));
var Sort;
(function (Sort) {
    Sort[Sort["Asc"] = 0] = "Asc";
    Sort[Sort["Desc"] = 1] = "Desc";
})(Sort || (Sort = {}));
class Company {
    employees = [];
    addEmployee(employee) {
        if (this.employees.some((emp) => emp.id === employee.id)) {
            console.log("Employee Already Exists");
            return;
        }
        if (employee.salary < 0) {
            console.log("Salary must be greater than 0");
            return;
        }
        this.employees.push(employee);
        console.log("Employee Added Successfully");
    }
    getAllEmployee() {
        return this.employees;
    }
    getEmployeeByRole(role) {
        const employee = this.employees.filter((emp) => emp.role === role);
        if (!employee) {
            console.log("No Employee Found with this role " + role);
            return;
        }
        return employee;
    }
    getEmployeeByStatus(status) {
        const employee = this.employees.filter((emp) => emp.isActive === status);
        if (!employee) {
            console.log("No Employee with this status");
            return;
        }
        return employee;
    }
    updateEmployeeStatus(empId, status) {
        const employee = this.employees.find((emp) => emp.id === empId);
        if (!employee) {
            console.log("No Employee found with this Id");
            return;
        }
        employee.isActive = status;
        console.log("Employee status updated successfully");
    }
    totalSalary() {
        return this.employees.reduce((acc, curr) => (curr.isActive ? acc + curr.salary : acc), 0);
    }
    sortBySalary(sort) {
        return sort === Sort.Asc
            ? this.employees.sort((a, b) => a.salary - b.salary)
            : this.employees.sort((a, b) => b.salary - a.salary);
    }
}
const company = new Company();
company.addEmployee({
    id: 1,
    name: "Aabid",
    role: Role.Developer,
    salary: 0,
    isActive: true,
});
company.addEmployee({
    id: 2,
    name: "Anis",
    role: Role.Developer,
    salary: 10000,
    isActive: false,
});
company.addEmployee({
    id: 3,
    name: "Ashwini",
    role: Role.HR,
    salary: 500000,
    isActive: true,
});
company.addEmployee({
    id: 4,
    name: "xyz",
    role: Role.Designer,
    salary: 35000,
    isActive: false,
});
company.addEmployee({
    id: 5,
    name: "abcd",
    role: Role.Designer,
    salary: 30000,
    isActive: false,
});
console.log(company.getEmployeeByRole(Role.Designer));
console.log(company.getEmployeeByStatus(true));
console.log(company.sortBySalary(Sort.Asc));
console.log(company.sortBySalary(Sort.Desc));
