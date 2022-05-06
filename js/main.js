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

// //Arrays - variables that hold multiple values
// // you can have mutiple datatypes in the arrays and arrays are zero based
// //old way to create array
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// //new and best way
// const fruites = ['apples', 'oranges', 'pears', 10, true];
// //getting all arrays elemets
// console.log(fruites);
// //getting one of them
// console.log(fruites[1]);
// //addding to the end of array with push
// fruites.push('mangos')
// //adding to the beginning we use unshift
// fruites.unshift('grapes');
// //taking the last one off array is pop
// fruites.pop()
// //taking the first one off is shift
// fruites.shift()
// //check id something is in array
// console.log(Array.isArray(fruites));
// //getting index of a certin value in array is indexOf
// console.log(fruites.indexOf('oranges'));
// console.log(fruites);

// //Object Literals - key value pairs
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main str',
//     city: 'Jalingo',
//     state: 'Taraba'
//   }
// }

// console.log(person);
// //to access a single object we use the dot syntax
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// //destructuring.. pulling out from object to use as variables
// const { firstName, lastName, address: {city} } = person
// console.log(firstName, city);

// //you can also add peroperties to your object
// person.email = 'rapoo@gmail.com';
// console.log(person);

// //array of objects
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: "How is your day",
//     isCompleted: false
//   },
//   {
//     id: 3,
//     text: "Good bye for now",
//     isCompleted: true
//   }
// ]
// console.log(todos);
// //getting the text in the array of object
// console.log(todos[1].text);
// //Json is a data format and used for full stack dev for api and sending data to a server. useally sent and recived in json

// //converting object to json format
// const todoJson = JSON.stringify(todos)
// console.log(todoJson);

// // Loops
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: "How is your day",
//     isCompleted: false
//   },
//   {
//     id: 3,
//     text: "Good bye for now",
//     isCompleted: true
//   }
// ]
// //for loops
// //first param is the assignment of the variables,, next is the condtion that needs to be met,, last is the increment adds 1 to i variable
// //what ever we put inside will run until the condition is true
// for(let i = 0; i <= 10; i++){
//   console.log(`for loop number: ${i}`);
// }

// //while loops
// //old school and the diff is that we set the variables outside the loop
// // always increment the i if not the loop will be a never ending loop becus the condition will not be met
// let i = 0;
// while(i < 10){
//   console.log(`while loop number: ${i}`)
//   i++;
// };

// //Looping through an array
// for(let i = 0; i < todos.length; i++){
//   console.log(todos[i].text);
// }
// // another way is for of loop
// for(let todo of todos){
//   console.log(todo.text)
// }

// high order array method take in as a parameter a function best of all
// forEach, Map, Filter
// forEach - which just loops through them
// map- will allow us to create a new array from an array
// filter- which will allow us create a new array based on a condition

// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: "How is your day",
//     isCompleted: false
//   },
//   {
//     id: 3,
//     text: "Good bye for now",
//     isCompleted: true
//   }
// ]
// //forEach
// todos.forEach(function(todo){
//   console.log(todo.id);
// });

// //map
// const todoText = todos.map(function(todo){
//   return todo.text
// });
// console.log(todoText);

// //Filter returns all the true and remove the fasle
// //you can chain on other methods like addinf map to filter
// const todoIsCom = todos.filter(function(todo){
//   return todo.isCompleted === true;
// }).map(function(todo){
//   // it only returns the ones that are true(completed)
//   return todo.text;
// })
// console.log(todoIsCom);


// //Conditional
// const x = 6;
// const y = 11;

// if(x === 10){
//   console.log(`x is 10`);
// }else if(x > 10){
//   console.log(`x is greater than 10`);
// }else{
//   console.log(`x less than 10`);
// }
// //OR means one of then must be true
// if(x > 5 || y > 10){
//   console.log(`x is more than 5 or y more than 10`);
// }
// //AND means two or all of then must be true
// if(x > 5 && y > 10){
//   console.log(`x is more than 5 or y more than 10`);
// }

// //tonori operator like short hand if statment
// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// //switch statment
// switch(color){
//   case 'red':
//     console.log(`color is red`);
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break
//   default:
//     console.log(`THERE IS NO COLOR`);
// }


// //FUNCTIONS
// function addNum(num1 = 1, num2 = 1){
//   return(num1 + num2);
// }
// console.log(addNum(5,4));
// //arrow function
// const AddNum = (num1, num2) => {
//   return(num1 + num2)
// }
// console.log(AddNum(5,5));

//Object oriented programming
// two ways to do this 1. constructor fun with prototypes or 2. es6 classes
//constructor function - always start with capital letter
function Person(firstname, lastname, dob){
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = new Date(dob);
  //methods
  this.getBirthYear = function(){
    return this.dob.getFullYear()
  }
  this.getFullName = function(){
    return `${this.firstname} ${this.lastname}`
  }
}
//instantiate object
const person1 = new Person('John', 'Doe', '4-3-1999')
const person2 = new Person('Mary', 'jOHN', '4-3-1999')
console.log(person1);
console.log(person2.dob);
console.log(person1.getBirthYear())
console.log(person2.getFullName())