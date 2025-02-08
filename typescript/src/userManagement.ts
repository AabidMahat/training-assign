const readline = require("readline");

enum Roles {
  Admin = "admin",
  Manager = "manager",
  Employee = "employee",
}

interface Users {
  id: number;
  name: string;
  email: string;
  role: Roles | string;
  phoneNumber?: string;
}

//! Predefined sample users

const users: Users[] = [
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

const createUser = (user: Users): Users => {
  users.push(user);
  return user;
};

//! Get User by its Role

const getUserByRole = (role: Roles | string): Users[] | undefined =>
  users.filter((user) => user.role === role);

//! Add readline interface

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// !Function to prompt user input
const promptUserInput = () => {
  rl.question(
    "Enter your choice 1) Get User by Role 2) Create new User: ",
    (answer: string) => {
      const choice = parseInt(answer);

      switch (choice) {
        case 1: {
          console.log(getUserByRole("Admin"));
          rl.close();
          break;
        }
        case 2: {
          rl.question(
            "Enter user details (id,name,email,role,phoneNumber): ",
            (answer: string) => {
              const [id, name, email, role, phoneNumber] = answer.split(",");
              const newUser: Users = {
                id: Number(id),
                name: name.trim(),
                email: email.trim(),
                role: role.trim(),
                phoneNumber: phoneNumber ? phoneNumber.trim() : undefined,
              };
              createUser(newUser);
              console.log("User created:", newUser);
              rl.close();
            }
          );
          break;
        }
        default:
          console.log("Invalid choice");
          rl.close();
          break;
      }
    }
  );
};

promptUserInput();
