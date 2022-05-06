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

// //more on strings methods
// const s = 'hello world'
// //number of letters
// console.log(s.length);
// console.log(s.toUpperCase);
// console.log(s.toLocaleLowerCase);
// //pulling out a particular text start and stop
// console.log(s.substring(0, 5).toUpperCase());
// //spliting a string to an array with anything you want to split by inside the box('')(',')
// console.log(s.split(''));

//Arrays - variables that hold multiple values
// you can have mutiple datatypes in the arrays and arrays are zero based
//old way to create array
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
//new and best way
const fruites = ['apples', 'oranges', 'pears', 10, true];
//getting all arrays elemets
console.log(fruites);
//getting one of them
console.log(fruites[1]);
//addding to the end of array with push
fruites.push('mangos')
//adding to the beginning we use unshift
fruites.unshift('grapes');
//taking the last one off array is pop
fruites.pop()
//taking the first one off is shift
fruites.shift()
//check id something is in array
console.log(Array.isArray(fruites));
//getting index of a certin value in array is indexOf
console.log(fruites.indexOf('oranges'));
console.log(fruites);
