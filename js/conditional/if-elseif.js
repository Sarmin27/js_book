console.log("if...else if statement");

var num1 = 10;
var num2 = 5;
var num3 = 20;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
  console.log(num1);
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
  console.log(num2);
} else {
  largest = num3;
  console.log(num3);
}
