var obj = {
  stdName: "abc",
  stdAge: 20,
  stdCity: {
    address: "gulshan",
    longitude: 24.19,
    latitude: 12.34,
  },
  status: true,
  courses: ["html", "php", "reactjs"],
  getName: function (name) {
    console.log(name + " " + obj.stdAge);
  },
};

obj.getName("faraz");

console.log();

document.write();

console.log(obj.getName());

obj.courses.push("nodejs");

delete obj.stdCity;

console.log(obj);

// function decalration

function abc() {
  console.log("function call..");
}

abc();
abc();

// Anonymous function

var func = function () {
  console.log("Anonymous function call..");
};

func();

var studentobj1 = {
  stdName: "abc",
  stdAge: 20,
  stdCity: {
    address: "gulshan",
    longitude: 24.19,
    latitude: 12.34,
  },
  status: true,
  courses: ["html", "php", "reactjs"],
  getName: function (name) {
    console.log(name + " " + obj.stdAge);
  },
};

var studentobj2 = {
  stdName: "abc",
  stdAge: 20,
  stdCity: {
    address: "gulshan",
    longitude: 24.19,
    latitude: 12.34,
  },
  status: true,
  courses: ["html", "php", "reactjs"],
  getName: function (name) {
    console.log(name + " " + obj.stdAge);
  },
};

function Student(name, age, city, status, courses) {
  (this.stdName = name),
    (this.stdAge = age),
    (this.stdCity = city),
    (this.status = status),
    (this.courses = courses);
}

Student.prototype.getName = function () {
  return this.stdName + " " + this.stdCity;
};

var studentObj = new Student("faraz", 23, "karachi", false, ["html", "css"]);

var studentObj2 = new Student("hamza", 20, "lahore", false, ["html", "css"]);

console.log("hasOwnProperty" in studentObj);

console.log(studentObj.hasOwnProperty("constructor"));

console.log(studentObj2);

var studentobj2 = {
  stdName: "abc",
  stdAge: 20,
  stdCity: {
    address: "gulshan",
    longitude: 24.19,
    latitude: 12.34,
  },
  status: true,
  courses: ["html", "php", "reactjs"],
  getName: function (name) {
    console.log(name + " " + obj.stdAge);
  },
};

console.log(studentobj2["status"]);

for (var i in studentobj2) {
  console.log(studentobj2[i]);
}

console.log(studentobj2["stdAge"]);

// For in loop

for (var outerkey in studentobj2) {
  for (var innerKeys in studentobj2[outerkey]) {
    for (var innerInnerKeys in studentobj2[outerkey][innerKeys])
      console.log(studentobj2[outerkey][innerKeys]);
  }
}

var obj = [
  {
    id: 1,
    name: "faraz",
    status: false,
  },
  {
    id: 2,
    name: "hamza",
    status: true,
  },
  {
    id: 3,
    name: "farooq",
    status: true,
  },
];

// console.log(obj);

var str = "hello world";

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

console.log(window);

console.log("hello world..");

window.open("index.html", "win1", "width=420,height=380");

function getValue() {
  try {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.trim() && password.trim()) {
      console.log(email);
      console.log(password);
    } else {
      alert("fill input fields...");
    }
  } catch (error) {
    console.log(error);
  }
}
