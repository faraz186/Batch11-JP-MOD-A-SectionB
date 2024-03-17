var userInput = prompt("Enter where do you live??");

var firstChar = userInput.slice(0, 1).toUpperCase();

var reaminAlphab = userInput.slice(1).toLowerCase();

var combineInput = firstChar + reaminAlphab;   

var cityArr = ["Karachi", "Lahore", "Multan", "Peshawar"];   
   
var flag = "0";
  
for (var i = 0; i < cityArr.length; i++) {
  if (combineInput === cityArr[i]) {
    flag = "1";
  }
}

if (flag === "1") {
  console.log("city has been found...");   
} else {
  console.log("city not found..");
}

var text = "this is an example..";

console.log(text[5]);

var text = "this is  a! simple text.";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 2) === "  ") {
    console.log("double space found..");
  }
}

var text = "this is  a! simple text.";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 1) === "!") {
    console.log("Exclamation mark found..");
  }
}

var text =
  "The New Yorker magazine doesn't allow the phrase World War II.They say it should be..";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "The second world war" + text.slice(i + 12);
    console.log(text);
  }
}

var text =
  "Eventually, in February 1947, Prime Minister Clement Attlee announced that the British government would grant full self-governance to British India by June 1948 at the latest. On 3 June 1947, the British government announced that the principle of division of into two independent states was accepted. The successor governments would be given dominion status and would have an implicit right to secede from the British Commonwealth. Viceroy Mountbatten chose 15 August, the second anniversary of Japan's surrender in the World War II";

// IndexOf Method

var text =
  "Eventually, in February 1947, Prime Minister Clement Attlee announced that the British government would grant full self-governance to British India by June 1948 at the latest. On 3 June 1947, the British government announced that the principle of division of into two independent states was accepted. The successor governments would be given British India dominion status and would have an implicit right to secede from the British Commonwealth. Viceroy Mountbatten chose 15 August, the second anniversary of Japan's surrender in the World War II";

var indexNum = text.indexOf("British India");

var firstText = text.slice(0, indexNum);

var ReplaceText = "The Second World War";

var RemainText = text.slice(indexNum + 13);

console.log(firstText + ReplaceText + RemainText);
     
// Replace & ReplaceAll method

console.log(text.replace(/British India/g, "The Second World war"));

console.log(text.replace("British India", "The Second World war"));
