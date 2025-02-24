//there are two type of data type in java script
// Primitive  and  non-Primitive.
// primitive:- Number,Strings.boolean,Null,Undefined,BigInt,Symbol.
// Non-Primitive(Referance):-Array ,Objects,Function.


const score=100
const scoreValue=100.4

// if someone want to logedin.
const isLoggedIn=false
const outsidetemp= null
let userEmail;
console.log(typeof score);
console.log( typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsidetemp);
console.log(typeof userEmail);
 
const id= Symbol ('222');
const selfId= Symbol ('222');
console.log(typeof id);
console.log(typeof selfId);
console.log(id===selfId);


const bigNumber=2345454653233
console.log(bigNumber);

// non-Primrtive datatype
const heros=("Ram","Shiv","Krishna")
let myObj={
    name :"Shyam",
    age:22,
}

const myFunction= function(){
console.log("Hello Eveybody");
}

console.log(typeof myFunction);
console.log( typeof myObj);








