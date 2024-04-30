// function addTodo() {
//   var input = document.getElementById("todoInput");

//   console.log(input.value);

//   var list = document.getElementById("list");

//   list.innerHTML += `<li>${input.value}
//   <button onclick="editItem(this)">Edit</button>
//   <button onclick="deleteItem(this)">Delete</button>
//   </li>`;

//   var liElement = document.createElement("li");

//   var liText = document.createTextNode(input.value);

//   liElement.appendChild(liText);

//   //   console.log(liElement);

//   var list = document.getElementById("list");

//   list.appendChild(liElement);

//   //   delete button creation

//   var delBtnELement = document.createElement("button");

//   var delBtnText = document.createTextNode("delete");

//   delBtnELement.appendChild(delBtnText);

//   liElement.appendChild(delBtnELement);

//   delBtnELement.style.backgroundColor = "blue";
//   delBtnELement.style.color = "white";

//   delBtnELement.setAttribute("onclick", "deleteItem(this)");
//   //   Edit button creation

//   var EditBtnELement = document.createElement("button");

//   var EditBtnText = document.createTextNode("edit");

//   EditBtnELement.appendChild(EditBtnText);

//   liElement.appendChild(EditBtnELement);

//   EditBtnELement.setAttribute("class", "editBtn");

//   EditBtnELement.setAttribute("onclick", "editItem(this)");
// }

// function delteAll() {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
// }

// function deleteItem(e) {
//   e.parentNode.remove();
// }

// function editItem(e) {
//   var updateValue = prompt("Enter updated value..");

//   e.parentNode.firstChild.nodeValue = updateValue;
// }

// Template Literals

// var firstName = "Muhammad";
// var lastName = "faraz";
// var age = 23;
// var city = "karachi";

// console.log(
//   `Hello my name is ${firstName} ${lastName}. my age is ${age}. I lived in ${city}`
// );

// console.log(
//   "Hello my name is " +
//     firstName +
//     " " +
//     lastName +
//     ". I am " +
//     age +
//     " years old. I lived in " +
//     city
// );

//             Objects

var arr = ["faraz", 23, true];

// console.log(arr);

// arr.push("farooq");

// console.log(arr);

// console.log(typeof arr);

var studentobj = {
  name: "faraz",
  age: 23,
  status: true,
  courses: "html",
};

delete studentobj.password;

studentobj.courses = ["css", "js"];

studentobj.courses.push("reactjs");

// // in

console.log("name" in studentobj);

// // delete

delete studentobj.courses;

console.log(studentobj);

var studentobj = {
  name: "faraz",
  age: 23,
  status: true,
  courses: "html",
  Education: {
    CGPA: "3.9",
    qUALIFICATION: "bachleors in Computer Science",
  },
};

// console.log(studentobj.Education.CGPA);

var arr = ["faraz", 23, { city: "karachi" }];

console.log(arr[2].city);
