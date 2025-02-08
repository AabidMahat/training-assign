"use strict";
const readline = require("readline");
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["Manager"] = "manager";
    Roles["Employee"] = "employee";
})(Roles || (Roles = {}));
//! Predefined sample users
const users = [
    {
        id: 1,
        name: "Aabid",
        email: "sdsadas@",
        role: "Manager",
    },
    {
        id: 2,
        name: "dsdas",
        email: "dssd",
        role: "Admin",
        phoneNumber: "3423",
    },
];
//! To Create a new user
const createUser = (user) => {
    users.push(user);
    return user;
};
//! Get User by its Role
const getUserByRole = (role) => users.filter((user) => user.role === role);
//! Add readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// !Function to prompt user input
const promptUserInput = () => {
    rl.question("Enter your choice 1) Get User by Role 2) Create new User: ", (answer) => {
        const choice = parseInt(answer);
        switch (choice) {
            case 1: {
                console.log(getUserByRole("Admin"));
                rl.close();
                break;
            }
            case 2: {
                rl.question("Enter user details (id,name,email,role,phoneNumber): ", (answer) => {
                    const [id, name, email, role, phoneNumber] = answer.split(",");
                    const newUser = {
                        id: Number(id),
                        name: name.trim(),
                        email: email.trim(),
                        role: role.trim(),
                        phoneNumber: phoneNumber ? phoneNumber.trim() : undefined,
                    };
                    createUser(newUser);
                    console.log("User created:", newUser);
                    rl.close();
                });
                break;
            }
            default:
                console.log("Invalid choice");
                rl.close();
                break;
        }
    });
};
promptUserInput();
