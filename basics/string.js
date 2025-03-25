// string is an object it cantain the key value pair value
// const name="shital"
// const value=50
// console.log(`hello my name is ${name} and the value is ${value}`);
 
// // 2 nd type of declaration of string in javascript
// const gameName= new String("Shitalbhai") //jo brscket me  likha hai use hum  constractor bolte hai
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// all string methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf('l'));

// sub strings
let string="ShitalBhairam"
const newString=string.substring(0,6)
console.log(newString);

// slicing
const newString2=string.slice(5,8)
console.log(newString);
// trim
const newstring3="  Shital  ";
console.log(newstring3);
console.log(newstring3.trim());

// replace
const url="hhtps://shital.com/shital@4bhairam"
console.log(url.replace('@4','__'))
console.log(url.includes('shital'))






