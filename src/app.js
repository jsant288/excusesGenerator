let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = randomPartOfArray();
  var myButton = document.getElementById("button");
};

function randomPartOfArray(arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
}
console.log(randomPartOfArray(who));
console.log(randomPartOfArray(action));
console.log(randomPartOfArray(what));
console.log(randomPartOfArray(when));

// function joelExcuseSentence(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }
// // excuseGenerator(who);
// // excuseGenerator(what);
// // excuseGenerator(action)
// console.log(joelExcuseSentence(who));
// console.log(joelExcuseSentence(action));
// console.log(joelExcuseSentence(what));
// console.log(joelExcuseSentence(when));
