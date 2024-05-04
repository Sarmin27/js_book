console.log("comparison");
/* 
COMPARISON: ekta valuer sathe ar ekta value r compair kora.
1.equal:==
2.not equal : !=
3.greater than (bigger): >
4.less than:<
5.greater than or equal:>=
6.less than or equal: <=
7.== and ===
8.=== and !==
*/
//1.equal:==
var a = 10;
var b = 10;
var c = a == b;
console.log(c); //true

//2.not equal : !=
var x = 100;
var y = 50;
console.log(x != y); //true

//3.greater than (bigger): >
console.log(x > y); //true
console.log(a > b); //false
//4.less than:<

console.log(x < y); //false
console.log(a < b); //false

//5.greater than or equal:>=
var m = 250;
var n = 500;
console.log(m >= n); //false

//6.less than or equal: <=
console.log(m <= n); //true

//7.== and ===
console.log(10 == 10);
console.log(10 == "10"); // ekhetre sudu man ta k tulona kore ...type tulona korena.(true)
console.log(10 === 10); //true
console.log(10 === "10"); //ekhetre man + type o check kore tai  eta false
console.log(10 != "10"); //false

//8.=== and !==
console.log(10 === "10"); //ekhetre man + type o check kore tai  eta false
console.log(10 !== "10"); //true
