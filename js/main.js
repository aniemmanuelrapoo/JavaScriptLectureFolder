//console is a method of showing results to the browser
// console.log('hello world')
// console.error('This is a error')
// console.warn('This is a warning')

//// variables
//var let const  var is global scoped and not advised to be used. its old
//let and const are es6
//let you can reassign vaules
// let age = 30;
// age = 31
// console.log(age);
//const you cant reassign vaules

////DataTypes
////Strings, Numbers, Boolean, Null, Underfine
// const name = "john";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);

// // working with strings
// const name = 'john';
// const age = 30;
// //concatination
// console.log('my name is ' + name + ' and i am ' + age)
// //Template String
// console.log(`my name is ${name} and i am ${age}`)

//more on strings methods
const s = 'hello world'
//number of letters
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.toLocaleLowerCase);
//pulling out a particular text start and stop
console.log(s.substring(0, 5).toUpperCase());
//spliting a string to an array with anything you want to split by inside the box('')(',')
console.log(s.split(''));