console.log("variable");

/**
 * Variable=var +able [container]
it's changeable
5 things to declare a variable
var weight=30;
here, 1.var =keyword
2.weight=name
3,4= man(30) set kora
5. ;
variable mane kono kichu store kore rakha
 */

// Variable : Variables are containers for storing information.
//javaScript e variable declare kora hoi var,let,const keyword diye.
// NAMING JS RULES
//1.JavaScript e reserve keywords variable er nam hisebe use kora jaina.

// var var = 50;
// var false=45;

// //2.variable er nam letter diye suru hote parbe.
var num = 10;
console.log(num);
//  // but number ,special character (!,@,#,%,^,&,*,(.))esob diye suru hoina
//  var 2num = 10; //not valid
//  var ^name = 'sarmin';

// can not start with a Number/.Number
var 6money=50;
var .money=50;
// but  number other than the 1st letter is allowed ...1st letter baade number likha jabe 
var m3333=50;

//but _(underscore) and $ diye suru hoi
var some_thing = "Anything";
console.log(some_thing);
var $text = "i am valid";
console.log($text);


// 3.no space or gap in variable name 
var is happy= false;
//jodi emon kono variable name nite hoi jkhane majhe space dorkar tahole camelcase e likhte hobe ba underscore use korte hobe.
// how to write a long variable name 
var my current home address="Bohorampur Rajshahi";
var my_current_home_address="Bohorampur Rajshahi"; //snake case
var myCurrentHomeAddress="Bohorampur Rajshahi";//camel case
var MyCurrentHomeAddress="Bohorampur Rajshahi";//pascal case

// *** keyword are case sensitive 
var name="Maya";
Var name="Maya";//not allow
VAR name="Maya";//not allow


//variable name o case sensitive
var myname = 'Maya';
var MyName = 'Sarmin';
//myname and MyName 2ta vinno jinis bojhai

// 4.no quote 
var "address" ="kochu";