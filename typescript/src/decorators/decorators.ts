enum Role {
  Admin = "Admin",
  Managers = "Manager",
  Employee = "Employee",
}

function roleGuard(allowedRoles: Role[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const user: User = args[0];
      if (!allowedRoles.includes(user.role)) {
        throw new Error(
          `Access denied! ${user.role} does not have permission to perform this action.`
        );
      }
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class User {
  constructor(public role: Role) {}
}

class EmployeeActions {
  @roleGuard([Role.Admin, Role.Managers])
  approveLeave(user: User) {
    console.log(`${user.role} approved leave.`);
  }

  @roleGuard([Role.Admin])
  fireEmployee(user: User) {
    console.log(`${user.role} fired an employee.`);
  }

  @roleGuard([Role.Admin, Role.Managers, Role.Employee])
  submitReport(user: User) {
    console.log(`${user.role} submitted a report.`);
  }
}

const admin = new User(Role.Admin);
const manager = new User(Role.Managers);
const employee = new User(Role.Employee);

const actions = new EmployeeActions();

try {
  actions.approveLeave(admin);
  actions.approveLeave(manager);
  actions.approveLeave(employee);
} catch (error) {
  console.error((error as Error).message);
}

try {
  actions.fireEmployee(admin);
  actions.fireEmployee(manager);
  actions.fireEmployee(employee);
} catch (error) {
  console.error((error as Error).message);
}

try {
  actions.submitReport(admin);
  actions.submitReport(manager);
  actions.submitReport(employee);
} catch (error) {
  console.error((error as Error).message);
}
