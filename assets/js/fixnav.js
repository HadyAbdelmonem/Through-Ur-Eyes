let userNav = document.getElementById("user-nav");
let loginNav = document.getElementById("login-nav");
let registerNav = document.getElementById("register-nav");
let logoutNav = document.getElementById("logout-nav");

if (userNav.innerHTML != "") {
  userNav.style.visibility = "visible";
  logoutNav.style.display = "block";
  loginNav.style.display = "none";
  registerNav.style.display = "none";
}
function setNav() {
  logoutNav.style.display = "none";
  loginNav.style.display = "block";
  registerNav.style.display = "block";
  userNav.innerHTML = "";
  userNav.style.visibility = "hidden";
}
