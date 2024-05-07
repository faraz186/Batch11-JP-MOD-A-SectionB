// Local Storage

var name = "faraz";

var arr = ["faraz", 100, false];

var obj = {
  stdName: "abc",
  stdAge: 22,
  stdEmail: "abc@gmail.com",
  stdCity: "karachi",
};

console.log(JSON.stringify(obj));

console.log(typeof obj);

localStorage.setItem("obj", JSON.stringify(obj));

localStorage.setItem("name", name);

localStorage.setItem("arr", JSON.stringify(arr));

localStorage.removeItem("username");

var getData = localStorage.getItem("obj");

console.log(getData);

localStorage.removeItem("name");

console.log(JSON.parse(getData));

localStorage.clear();

function getValue() {
  var input = document.getElementById("name");

  var getDataFromLocalStorage = localStorage.getItem("Stdobj");

  var convertData = JSON.parse(getDataFromLocalStorage);

  if (!convertData) {
    convertData = [];
  }

  var obj = {
    name: input.value,
  };

  convertData.push(obj);

  localStorage.setItem("Stdobj", JSON.stringify(convertData));
}

// Regular Expression OR Regex

function changeIcon() {
  var PasswordInput = document.getElementById("password");
  var img = document.getElementById("img");

  if (PasswordInput.type === "password") {
    PasswordInput.type = "text";
    img.src = "eye.png";
  } else {
    PasswordInput.type = "password";
    img.src = "hidden.png";
  }
}

function validation() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;
  var mobileNo = document.getElementById("mobileNo").value;

  var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var userCheck = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  var mobileCheck =
    /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

  if (userCheck.test(username)) {
    document.getElementById("userError").innerHTML = "";
  } else {
    document.getElementById("userError").innerHTML = "** Invalid Username";
    return false;
  }

  if (emailCheck.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "** Invalid email";
    return false;
  }

  if (passwordCheck.test(password)) {
    document.getElementById("passwordError").innerHTML = "";
  } else {
    document.getElementById("passwordError").innerHTML = "** Invalid password";
    return false;
  }

  if (cpassword === password) {
    document.getElementById("cpasswordError").innerHTML = "";
  } else {
    document.getElementById("cpasswordError").innerHTML =
      "** Password not match";
    return false;
  }

  if (mobileCheck.test(mobileNo)) {
    document.getElementById("mobileError").innerHTML = "";
  } else {
    document.getElementById("mobileError").innerHTML =
      "** Invalid mobile number..";
    return false;
  }

  var obj = {
    username,
    email,
    password,
    mobileNo,
  };

  console.log(obj);

  localStorage.setItem("obj", JSON.stringify(obj));
  return false;
}
