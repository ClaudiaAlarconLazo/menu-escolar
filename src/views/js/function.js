window.onload = () => {
  const access_token = sessionStorage.getItem("access_token");
  const path = window.location.pathname;
  const splitPath = path.split("/");

  if (splitPath[1] === "" || splitPath[1].startsWith("orders")) {
    if (!access_token) {
      window.location.href = "/login";
    }
  }
};

async function signUp(event) {
  event.preventDefault();
  const registerForm = document.getElementById("sign-up-form");
  const dataForm = new FormData(registerForm);
  const data = Object.fromEntries(dataForm.entries());

  const payload = {
    name: data.nameRegister,
    email: data.emailRegister,
    password: data.passwordRegister,
  };

  const response = await axios.post("api/v1/auth/signup", payload);

  console.log(response);
}

async function login(event) {
  event.preventDefault();
  const registerForm = document.getElementById("login-form");
  const dataForm = new FormData(registerForm);
  const data = Object.fromEntries(dataForm.entries());

  const response = await axios.post("api/v1/auth/login", data);

  sessionStorage.setItem("access_token", response.data.access_token);
  sessionStorage.setItem("email", response.data.school.email);
  console.log(response);
}

async function logout(event) {
  event.preventDefault();
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("email");
}
