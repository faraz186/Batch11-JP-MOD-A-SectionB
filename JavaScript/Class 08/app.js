function greet() {
  alert("on click event call...");
}

var anchorTag = document.getElementById("link");

anchorTag.href = "https://www.google.com";

anchorTag.style.color = "green";

console.log(anchorTag);

function over(e) {
  console.log(e);
  e.src =
    "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds";
  var image = document.getElementById("img");
  image.src =
    "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds";
}

// function out(e) {
//   console.log(e);
//   e.src =
//     "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg";
//   //   var image = document.getElementById("img");
//   image.src =
//     "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg";
// }

// function submit() {
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");

//   if (email.value && password.value) {
//     console.log(email.value);
//     console.log(password.value);
//   } else {
//     alert("please required empty field...");
//   }
// }

// function set() {
//   var input = document.getElementById("email");

//   input.value = "faraz";
// }

// set();

// function submit() {
//   var dropdown = document.getElementById("dropdown");
//   console.log(dropdown.value);
// }

// function submit() {
//   var radio = document.getElementsByName("gender");

//   for (var i = 0; i <= radio.length; i++) {
//     if (radio[i].checked) {
//       console.log(radio[i].value);
//     }
//   }
// }

// var para = document.getElementById("para");

// para.innerHTML = "<h1>Hello World</h1>";

// para.innerHTML = "<h1>Hello World</h1>";

// console.log(para);

function expandPara() {
  var completeText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias totam, incidunt molestiae eum saepe, nemo consectetur corporis tempora, omnis at delectus sequi aut. Fuga qui dolorem nihil? Molestias voluptatibus commodi illum non! Provident sed distinctio id. Nihil omnis ad, dolorum, ullam necessitatibus unde nobis ipsum distinctio porro architecto dolore quaerat.";

  var para = document.getElementById("para");
  var link = document.getElementById("link");

  if (link.innerHTML === "Read more") {
    para.innerHTML = completeText;
    link.innerHTML = "Read less";
  } else {
    para.innerHTML = "lorem sa+56fa 5fsa2f";
    link.innerHTML = "Read more";
  }
}
