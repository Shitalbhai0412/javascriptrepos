// we are having two types of memory  stack memory and heap memory
// the primitive data type are store in stack memory and non_primitive datatype are store in heap memory
// whenever the  we use stack memory  in this whatever we variable we use it give the copy of that variable
// whenever the the object and anything is store in heap memlory its give the referance of that orignal value or (object). 

let value="shital"
// change teh value
let anotherValue= value
anotherValue="bhairam"

console.log(value);

console.log(anotherValue)


// in heap memory the  both have a same refereance and its change the orignal value.
let userone={
    email:"shitalbhai@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone
   usertwo.email="shitalbhairam@gmail.com",
    upi="user@ybl"

console.log(userone.email);
console.log(usertwo.email);



