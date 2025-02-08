"use strict";
var EmpRole;
(function (EmpRole) {
    EmpRole["Manager"] = "Manager";
    EmpRole["Developer"] = "Developer";
    EmpRole["Intern"] = "Intern";
})(EmpRole || (EmpRole = {}));
const EmpActivity = {
    [EmpRole.Manager]: ["approve_budget", "review_performance"],
    [EmpRole.Developer]: ["commit_code", "deploy_app"],
    [EmpRole.Intern]: ["attend_meeting", "submit_report", "attend_meeting"],
};
const invalidEmpData = [];
const activities = [
    {
        activityId: 1,
        activityName: "approve_budget",
        employeeId: 1,
        timestamp: new Date("2025-01-23T10:00:00"),
    },
    {
        activityId: 2,
        activityName: "commit_code",
        employeeId: 2,
        timestamp: new Date("2025-01-23T11:00:00"),
    },
    {
        activityId: 3,
        activityName: "attend_meeting",
        employeeId: 3,
        timestamp: new Date("2025-01-23T12:00:00"),
    },
    {
        activityId: 4,
        activityName: "deploy_app",
        employeeId: 4,
        timestamp: new Date("2025-01-23T13:00:00"),
    },
    {
        activityId: 5,
        activityName: "review_performance",
        employeeId: 1,
        timestamp: new Date("2025-01-23T14:00:00"),
    },
    {
        activityId: 6,
        activityName: "submit_report",
        employeeId: 3,
        timestamp: new Date("2025-01-23T15:00:00"),
    },
    {
        activityId: 7,
        activityName: "approve_budget",
        employeeId: 1,
        timestamp: new Date("2025-01-23T16:00:00"),
    },
    {
        activityId: 8,
        activityName: "commit_code",
        employeeId: 2,
        timestamp: new Date("2025-01-23T17:00:00"),
    },
    {
        activityId: 9,
        activityName: "attend_meeting",
        employeeId: 3,
        timestamp: new Date("2025-01-23T18:00:00"),
    },
    {
        activityId: 10,
        activityName: "deploy_app",
        employeeId: 4,
        timestamp: new Date("2025-01-23T19:00:00"),
    },
];
const employees = [
    {
        id: 1,
        name: "Amit Roy",
        email: "amit.roy@example.com",
        roles: EmpRole.Manager,
        status: "active",
    },
    {
        id: 2,
        name: "Nisha Mehta",
        email: "nisha.mehta@example.com",
        roles: EmpRole.Developer,
        status: "active",
    },
    {
        id: 3,
        name: "Ravi Sharma",
        email: "ravi.sharma@example.com",
        roles: EmpRole.Intern,
        status: "inactive",
    },
    {
        id: 4,
        name: "Priya Patel",
        email: "priya.patel@example.com",
        roles: EmpRole.Developer,
        status: "active",
    },
    {
        id: 5,
        name: "Karan Singh",
        email: "karan.singh@example.com",
        roles: EmpRole.Manager,
        status: "inactive",
    },
    {
        id: 6,
        name: "Sunita Rao",
        email: "sunita.rao@example.com",
        roles: EmpRole.Intern,
        status: "active",
    },
    {
        id: 7,
        name: "Vikram Kapoor",
        email: "vikram.kapoor@example.com",
        roles: EmpRole.Developer,
        status: "inactive",
    },
    {
        id: 8,
        name: "Anita Joshi",
        email: "anita.joshi@example.com",
        roles: EmpRole.Manager,
        status: "active",
    },
    {
        id: 9,
        name: "Rahul Desai",
        email: "rahul.desai@example.com",
        roles: EmpRole.Intern,
        status: "inactive",
    },
    {
        id: 10,
        name: "Divya Narayan",
        email: "divya.narayan@example.com",
        roles: EmpRole.Developer,
        status: "active",
    },
];
// Utility Functions
const updateEmp = (emp, data) => {
    return { ...emp, ...data };
};
// Employee Summary
const empSummary = (emp) => `Hi , Its ${emp.name} , My Role is ${emp.roles}`;
// Structured Map Format
const getEmpByRole = () => {
    const empByRole = {
        [EmpRole.Manager]: [],
        [EmpRole.Developer]: [],
        [EmpRole.Intern]: [],
    };
    employees.forEach((emp) => {
        empByRole[emp.roles].push(emp);
    });
    return empByRole;
};
// Activity Logger
function logActivity(empId, activity) {
    const emp = employees.find((emp) => emp.id === empId);
    if (!emp) {
        console.log("Employee with this id doesn't exist");
        return;
    }
    if (emp.status !== "active") {
        console.log("Employee is currently inactive");
        return;
    }
    const activities = EmpActivity[emp.roles] || [];
    if (!activities.includes(activity)) {
        console.log(`Role ${emp.roles} is not allowed to perform ${activity}`);
        invalidEmpData.push(emp);
        return;
    }
    console.log(`Logging activity "${activity}" for employee ${empId}`);
}
logActivity(1, "approve_budget"); // Assuming emp.id 1 is a Manager
logActivity(2, "approve_budget");
logActivity(6, "commit_code");
console.log(`Data of Employee trying to perform invalid access`);
console.table(invalidEmpData);
//
