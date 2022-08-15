// The syntax for a basic if statement is as follows:

// if (expression){
//   // Statement(s) to be executed if expression is true
// }

// var age = 20;
// if( age > 18 ){
//  document.write("<b>Qualifies for driving</b>");
// }

// //if and else syntax
// if (expression){
//   // Statement(s) to be executed if expression is true
// }else{
//   // Statement(s) to be executed if expression is false
// }

// var age = 15;
// if( age > 18 ){
//  document.write("<b>Qualifies for driving</b>");
// }else{
//  document.write("<b>Does not qualify for driving</b>");
// }

//if elseif and else syntax
// if (expression 1){
//   // Statement(s) to be executed if expression 1 is true
//  }else if (expression 2){
//   // Statement(s) to be executed if expression 2 is true
//  }else if (expression 3){
//   // Statement(s) to be executed if expression 3 is true
//  }else{
//   // Statement(s) to be executed if no expression is true
//  }

// var book = "maths";
// if( book == "history" ){
//  document.write("<b>History Book</b>");
// }else if( book == "maths" ){
//  document.write("<b>Maths Book</b>");
// }else if( book == "economics" ){
//  document.write("<b>Economics Book</b>");
// }else{
//  document.write("<b>Unknown Book</b>");
// }


//SWITCH CASE
//SYNTAX of swtich case
// switch (expression)
// {
//  case condition 1: statement(s)
//  break;
//  case condition 2: statement(s)
//  break;
//  ...
//  case condition n: statement(s)
//  break;
//  default: statement(s)
// }


// var grade='A';
// document.write("Entering switch block<br />");
// switch (grade)
// {
//  case 'A': document.write("Good job<br />");
//  break;
//  case 'B': document.write("Pretty good<br />");
//  break;
//  case 'C': document.write("Passed<br />");
//  break;
//  case 'D': document.write("Not so good<br />");
//  break;
//  case 'F': document.write("Failed<br />");
//  break;
//  default: document.write("Unknown grade<br />")
// }
// document.write("Exiting switch block");


//WITHOUT BREAK IT RUN ALL THE CODES
// var grade='A';
// document.write("Entering switch block<br />");
// switch (grade)
// {
//  case 'A': document.write("Good job<br />");
//  case 'B': document.write("Pretty good<br />");
//  case 'C': document.write("Passed<br />");
//  case 'D': document.write("Not so good<br />");
//  case 'F': document.write("Failed<br />");
//  default: document.write("Unknown grade<br />")
// }
// document.write("Exiting switch block");