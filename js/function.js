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

//The return Statement => pass the secoundFunction to the html button
function concatenate(first, last){
  var full;
  full = first + last;
  return full;
 }
 
 function secondFunction(){
  var result;
  result = concatenate('Zara', 'Ali');
  document.write (result );
 }