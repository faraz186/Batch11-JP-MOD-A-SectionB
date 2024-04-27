function addTodo() {
  var input = document.getElementById("todoInput");
  console.log(input.value);

  var liELement = document.createElement("li");

  var liText = document.createTextNode(input.value);

  liELement.appendChild(liText);

  console.log(liELement);

  var list = document.getElementById("list");

  list.appendChild(liELement);

  //   delete button creation

  var delBtnELement = document.createElement("button");

  var delBtnText = document.createTextNode("delete");

  delBtnELement.appendChild(delBtnText);

  //   Edit button creation

  var editBtnELement = document.createElement("button");

  var editBtnText = document.createTextNode("edit");

  editBtnELement.appendChild(editBtnText);

  liELement.appendChild(delBtnELement);

  liELement.appendChild(editBtnELement);

  input.value = "";
}

function deleteAll() {
  var list = document.getElementById("list");
  list.innerHTML = "";
}
