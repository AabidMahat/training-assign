enum Role {
  Manager,
  Developer,
  Designer,
  Tester,
  HR,
}

enum Sort {
  Asc,
  Desc,
}

interface Employee {
  id: number;
  name: string;
  role: Role;
  salary: number;
  isActive: boolean;
}

class Company {
  employees: Employee[] = [];

  addEmployee(employee: Employee): void {
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

  getAllEmployee(): Employee[] {
    return this.employees;
  }

  getEmployeeByRole(role: Role): Employee | Employee[] | undefined {
    const employee = this.employees.filter((emp) => emp.role === role);

    if (!employee) {
      console.log("No Employee Found with this role " + role);

      return;
    }

    return employee;
  }

  getEmployeeByStatus(status: boolean): Employee | Employee[] | undefined {
    const employee: Employee | Employee[] = this.employees.filter(
      (emp) => emp.isActive === status
    );

    if (!employee) {
      console.log("No Employee with this status");
      return;
    }
    return employee;
  }

  updateEmployeeStatus(empId: number, status: boolean): void {
    const employee: Employee | undefined = this.employees.find(
      (emp) => emp.id === empId
    );

    if (!employee) {
      console.log("No Employee found with this Id");
      return;
    }
    employee.isActive = status;
    console.log("Employee status updated successfully");
  }

  totalSalary(): number {
    return this.employees.reduce(
      (acc, curr) => (curr.isActive ? acc + curr.salary : acc),
      0
    );
  }

  sortBySalary(sort: Sort): Employee[] {
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
