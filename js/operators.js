//Operators
//Arithmetic Operators
var a = 30;
var b = 10;
var c = "Test"
var linebreak = "<br />"

//addition
document.write("a + b = ")
result = a + b
document.write(result)
document.write(linebreak)

//mins
document.write("a - b = ")
result = a - b
document.write(result)
document.write(linebreak)

//divsion
document.write("a / b = ")
result = a / b
document.write(result)
document.write(linebreak)

//multiplication
document.write("a * b = ")
result = a * b
document.write(result)
document.write(linebreak)

//Modulus
document.write("a % b = ")
result = a % b
document.write(result)
document.write(linebreak)

//adding strings
document.write("a + b + c = ")
result = a + b + c
document.write(result)
document.write(linebreak)

//Increment 
a++
document.write("a++ =")
result = a
document.write(result)
document.write(linebreak)

//Decrement
b--
document.write("b-- =")
result = b
document.write(result)
document.write(linebreak)


//Comparision Operators
var a = 20
var b = 10
var linebreak = "<br />"

//equals
document.write("(a === b) => ")
result = (a === b)
document.write(result)
document.write(linebreak)

//greater than
document.write("(a > b) => ")
result = (a > b)
document.write(result)
document.write(linebreak)

//less than
document.write("(a < b) => ")
result = (a < b)
document.write(result)
document.write(linebreak)

//greater than or equal
document.write("(a >= b) => ")
result = (a >= b)
document.write(result)
document.write(linebreak)

//lessthan or equal
document.write("(a <= b) => ")
result = (a <= b)
document.write(result)
document.write(linebreak)

//Not Equals to
document.write("(a != b)")
result = (a != b)
document.write(result)
document.write(linebreak)


//Logical Operators
var a = true
var b = true

//Logical AND
document.write("(a && b) => ")
result = (a && b)
document.write(result)
document.write(linebreak)

//Logical OR
document.write("(a || b) => ")
result = (a || b)
document.write(result)
document.write(linebreak)

//Logical NOT
document.write("!(a && b) => ")
result = (!(a && b))
document.write(result)
document.write(linebreak)


//Assignment Operators
var a = 20;
var b = 10;
var linebreak = "<br />";

// simple assignment
document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result);
document.write(linebreak);

//add assignment
document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result);
document.write(linebreak);

//subtract assignment
document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result);
document.write(linebreak);

// multiply assignment
document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result);
document.write(linebreak);

//divide assignment
document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result);
document.write(linebreak);

//modules assignment
document.write("Value of a => (a %= b) => ");
result = (a %= b);
document.write(result);
document.write(linebreak)


//Conditional Operators
var a = 10;
var b = 20;
var linebreak = "<br />";

document.write ("((a > b) ? 100 : 200) => ");
result = (a > b) ? 100 : 200;
document.write(result);
document.write(linebreak);

document.write ("((a < b) ? 100 : 200) => ")
result = (a < b) ? 100 : 200;
document.write(result);
document.write(linebreak);