let userEmail = document.querySelector(".userEmail");

let userPassword = document.querySelector(".userPassword");

let signIn_btn = document.querySelector(".sign-in-btn");

//let email = localStorage.getItem("userEmail");

//let password = localStorage.getItem("password");

let arrOusers = JSON.parse(localStorage.getItem("users"));
console.log(arrOusers);

signIn_btn.addEventListener("click", (e) => {
  let existsUser = arrOusers.find(
    (user) =>
      user.userEmail === userEmail.value && user.password === userPassword.value
  );
  if (existsUser) {
    setTimeout(function () {
      window.location = "./index.html";
    }, 100);
    e.preventDefault();
  } else {
    alert("invalid email or password");
    console.log(wrong);
  }
});

// signIn_btn.addEventListener("click", (e) => {
//   if (email === userEmail.value && password === userPassword.value) {
//     setTimeout(function () {
//       window.location = "./index.html";
//     }, 100);
//     e.preventDefault();
//   } else {
//     try {
//       throw "invalid  email or password"; // generates an exception
//     } catch (e) {
//       // statements to handle any exceptions
//       alert(e); // pass exception object to error handler
//     }
//   }
// });
