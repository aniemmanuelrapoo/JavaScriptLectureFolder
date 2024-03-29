// //Syntax
// function sayHello()
// {
//  alert("Hello there");
// }

// //calling a function => use a html button for onclick
// function sayHello() 
// { 
//  document.write ("Hello there!");
// } 

// //function Parameters => give the html buttton two parameter
// function sayHello(name, age)
// {
//  document.write (name + " is " + age + " years old.");
// }

// //The return Statement => pass the secoundFunction to the html button
// function concatenate(first, last){
//   var full;
//   full = first + last;
//   return full;
// }
 
// function secondFunction(){
//   var result;
//   result = concatenate('Zara', 'Ali');
//   document.write (result );
// }

// //Nested Functions => pass the secoundFunction to the html button
// function hypotenuse(a, b) {
//   function square(x) { return x*x; }
  
//   return Math.sqrt(square(a) + square(b));
// }
// function secondFunction(){
//   var result;
//   result = hypotenuse(2,2);
//   document.write ( result );
// }

// //Function () Constructor => pass the secoundFunction to the html button
// var func = new Function("x", "y", "return x*y;");
// function secondFunction(){
//  var result;
//  result = func(10,20);
//  document.write ( result );
// }

//Function Literals => pass the secoundFunction to the html button
var func = function(x,y){ return x*y };
function secondFunction(){
 var result;
 result = func(10,20);
 document.write ( result );
}