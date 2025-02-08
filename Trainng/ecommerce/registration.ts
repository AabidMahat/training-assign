const form: HTMLFormElement = document.getElementById(
  "form"
) as HTMLFormElement;

const username: HTMLInputElement = document.getElementById(
  "name"
)! as HTMLInputElement;
const userEmail: HTMLInputElement = document.getElementById(
  "email"
)! as HTMLInputElement;
const userPassword: HTMLInputElement = document.getElementById(
  "password"
)! as HTMLInputElement;
const userConfirmPassword: HTMLInputElement = document.getElementById(
  "confirm_password"
)! as HTMLInputElement;

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Validations {
  isValid: boolean;
  error: {
    [key: string]: string;
  };
}

function validateForm(user: User): Validations {
  const error: {
    [key: string]: string;
  } = {};

  if (user.name === "" || user.name.length < 3) {
    error.name = "Invalid username";
  }

  if (
    !user.email ||
    new RegExp("^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$").test(user.email)
  ) {
    error.email = "Invalid email";
  }

  if (!user.password || user.password.length < 6) {
    error.password = "Password doesn't match given condition";
  }

  if (user.confirmPassword !== user.password) {
    error.confirmPassword = "Password doesn't match";
  }
  const isValid = Object.keys(error).length === 0;
  return {
    isValid,
    error,
  };
}

function getUserData() {
  const user: User = {
    name: username.value,
    email: userEmail.value,
    password: userPassword.value,
    confirmPassword: userConfirmPassword.value,
  };
  const data: Validations = validateForm(user);

  if (data.isValid) {
    alert("Registration Completed");
  } else {
    console.log(data.error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getUserData();
});
