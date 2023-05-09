let userName = document.querySelector("#userName");

let email = document.querySelector(".userEmail");

let password = document.querySelector(".userPassword");
let signUp_btn = document.querySelector(".sign-up-btn");

let userNameVal = userName.value;


localStorage.removeItem("users");//why 
signUp_btn.addEventListener("click", (e) => {
 if ((userName.value!=="")&&(email.value!=="")&&(password.value!=="")){
  let arrOfusers = [];
  let users = { //object
    userName: document.querySelector("#userName").value,
    userEmail: email.value,
    password: password.value,
  };

  arrOfusers.push(users);
  arrOfusers = arrOfusers.concat(
    JSON.parse(localStorage.getItem("users")) || '[]'
  );
  localStorage.setItem("users", JSON.stringify(arrOfusers));
  setTimeout(function () {
    window.location = "./index.html";
  }, 100);
e.preventDefault();
 }else{
alert("please fill")
 }
});

// signUp_btn.addEventListener("click", (e) => {
//   localStorage.setItem("userName", JSON.stringify(userName.value));
//   localStorage.setItem("userEmail", JSON.stringify(email.value));

//   localStorage.setItem("password", JSON.stringify(password.value));

//   setTimeout(function () {
//     window.location = "./index.html";
//   }, 100);
//   e.preventDefault();
// });
