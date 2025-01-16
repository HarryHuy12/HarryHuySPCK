const register = document.getElementById("signup-form");

register.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.getElementById("userName").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  console.log(userName);
  console.log(password);
  console.log(email);

  if (userName.length >= 6 && userName.length <= 18) {
    if (password.length >= 8 && password.length <= 20) {
      if (password === confirmPassword) {
        const user = {
          userName: userName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        };
        console.log(user);
        window.location.href = "dangnhap.html";
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
  }
});