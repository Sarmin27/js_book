console.log("concatenation");
//concatenation: add kora.
//JavaScript e koyekta add eksathe add korte chaile '+' sign use  kora hoi.
var text = "how" + " are you?";
console.log(text);
var msg = "Hi," + text;
// console.log(msg);

// Data type check korar jonno typeof operator use kora hoi
console.log(typeof msg); //string

var number = 100;
console.log(typeof number); //number
var number2 = 100.42;
console.log(typeof number2); //number

var isString = "100";
console.log(typeof isString); //string

var first = "Sarmin";
var second = " Sultana";
var fullName = first + second;
console.log(fullName);

//+ er khetre
console.log(40 + "10"); //4010 (concatenate)
//- er khetre thikthak
console.log(20 - "10"); //ans:10
//* er khetre thikthak
console.log(10 * "5"); //ans:50

var num1 = 40;
var num2 = "10";
var numbers = num1 + num2;
console.log(typeof numbers); //string

var num3 = 40;
var num4 = "10";
var sub = num1 - num2;
console.log(typeof sub); //number

var complex = 10 + 10 + " some Text " + 10 + 10;
console.log(complex); //20 some Text 1010 .....string er pore concate ghotche
console.log(typeof complex); //string
