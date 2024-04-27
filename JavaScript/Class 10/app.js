console.log(document.childNodes[1].childNodes[2].childNodes[1]);

var paras = document.getElementsByTagName("h1");

for (var i = 0; i < paras.length; i++) {
  console.log(paras[i]);
}

// var div = document.getElementById("container");

// var res = div.childNodes[1].nextSibling;
// console.log(res);

// var anchor = document.getElementById("link");

// var heading = document.getElementById("heading");

// console.log(heading.attributes[0].nodeValue);

// heading.setAttribute("class", "heading");

// console.log(heading.getAttribute("class"));

// anchor.setAttribute("href", "https://www.google.com");

// var h1Element = document.createElement("h1");

// var h1Text = document.createTextNode("Hello DOM");

// h1Element.appendChild(h1Text);

// console.log(h1Element);

// // h1Element.style.backgroundColor = "lightgrey";

// h1Element.setAttribute("class", "heading");

// var anchorElement = document.createElement("a");

// var anchorText = document.createTextNode("Google");

// anchorElement.appendChild(anchorText);

// console.log(anchorElement);

// anchorElement.setAttribute("href", "https://www.google.com");

// var div = document.getElementById("container");

// div.appendChild(h1Element);

// div.appendChild(anchorElement);

// var imageElement = document.createElement("img");

// imageElement.setAttribute(
//   "src",
//   "https://cdn.pixabay.com/photo/2023/03/23/07/56/ai-generated-7871392_960_720.jpg"
// );

// imageElement.setAttribute("width", "120px");

// var div = document.getElementById("container");

// div.appendChild(imageElement);
// console.log(imageElement);
