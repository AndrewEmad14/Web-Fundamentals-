var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((element) => isNaN(element)));
console.log(fruits.some((element) => element.search("^a")));
var alteredFruits = fruits.filter((element) => element.match("^[bs]"));
console.log(alteredFruits);
var fruitMap = fruits.map((element) => (element = "i like " + element));
console.log(fruitMap);
