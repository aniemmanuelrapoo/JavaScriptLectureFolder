// //The while Loop
// var count = 5;
// document.write("Starting Loop<br /> ");
// while (count < 10){
//  document.write("Current Count : " + count + "<br />");
//  count++;
// }
// document.write("Loop stopped!");

//The do...whileLoop
// var count = 0;
// document.write("Starting Loop <br />");
// do{
//  document.write("Current Count : " + count + "<br />");
//  count++;
// }while (count == 0);
// document.write ("Loop stopped!");

//The for Loop
// var count;
// document.write("Starting Loop<br />");
// for(count = 0; count < 10; count++){
//  document.write("Current Count : " + count + "<br />" );
// }
// document.write("Loop stopped!");

// //FOR-IN LOOP 
// var work = {
//   fist: "thsghas",
//   fist1: "thsghas",
//   fist2: "thsghas",
//   fist3: "thsghas",
//   fist4: "thsghas",
// }
// var aProperty;
// document.write("Navigator Object Properties<br /> ");
// for (aProperty in work)
// {
//  document.write(aProperty);
//  document.write("<br />");
// }
// document.write ("Exiting from the loop!");

// //LOOP CONTROL
// //The break Statement
// var x = 0;
// document.write("Entering the loop<br /> ");
// while (x < 20)
// {
//  if (x == 5){ 
//  break; // breaks out of loop completely
//  }
//  x++;
//  document.write( x + "<br />");
// }
// document.write("Exiting the loop!<br /> ");

// //The continue Statement
// var x = 1;
// document.write("Entering the loop<br /> ");
// while (x < 10)
// {
//  x++;
//  if (x == 5){
//  continue; // skip
//  }
//  document.write( x + "<br />");
// }
// document.write("Exiting the loop!<br /> ");

//Using Labels to Control the Flow
document.write("Entering the loop!<br /> ");
outerloop: // This is the label name
for (var i = 0; i < 10; i++)
{
 document.write("Outerloop: " + i + "<br />");
 innerloop:
 for (var j = 0; j < 5; j++)
 {
  if (j > 3 ) break ; // Quit the innermost loop
  if (i == 2) break innerloop; // Do the same thing
  if (i == 4) break outerloop; // Quit the outer loop
  document.write("Innerloop: " + j + " <br />");
  }
 }
 document.write("Exiting the loop!<br /> ");