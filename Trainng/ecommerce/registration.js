var form = document.getElementById("form");
var username = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var userConfirmPassword = document.getElementById("confirm_password");
function validateForm(user) {
    var error = {};
    if (user.name === "" || user.name.length < 3) {
        error.name = "Invalid username";
    }
    if (!user.email ||
        new RegExp("^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$").test(user.email)) {
        error.email = "Invalid email";
    }
    if (!user.password || user.password.length < 6) {
        error.password = "Password doesn't match given condition";
    }
    if (user.confirmPassword !== user.password) {
        error.confirmPassword = "Password doesn't match";
    }
    var isValid = Object.keys(error).length === 0;
    return {
        isValid: isValid,
        error: error,
    };
}
function getUserData() {
    var user = {
        name: username.value,
        email: userEmail.value,
        password: userPassword.value,
        confirmPassword: userConfirmPassword.value,
    };
    var data = validateForm(user);
    if (data.isValid) {
        alert("Registration Completed");
    }
    else {
        console.log(data.error);
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    getUserData();
});
