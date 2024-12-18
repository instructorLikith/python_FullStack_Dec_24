var str = "this is a \"javascript\" demo"; //Escape Character
console.log(str)

var str1 = 'this is a "javascript" demo'
console.log(str1)

// Escape Sequence
// \'
// \"
// \\ backslash
// \n newLine
// \t tabspace
// \b backspace

var str2 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(str2)

//string length
var str3 = "this is a string example";
console.log(str3.length)

//Bracket Notation
var str4 = "exampl" // zero based indexing 0 - 5
console.log(str4[3])

//Immutability of string
var str5 = "Jello World";
str5[0] = "H"  // not allowed
str5 = "Hello World"; // allowed
console.log(str5)

//Finding Nth letter of string
var str6 = "this";
console.log(str6[str6.length - 2])

//substring 
var str7 = "example"
var first4letters = str7.substring(0,4)
console.log(first4letters)


// Arrays
// Allows storing data of different types
// ["string",0000,true]

var arr1 = ["test", 10, true];

// Multi Dimention/ Nested Array

var arr2 = [["test1",1],["test2",2],["test3",true]]

//Access the data in Array
var arr3 = [10,20,30]
console.log(arr3)

//Modify the data in Array
var arr4 = [10,20,30];
console.log(arr4)
arr4[2] = 40;
console.log(arr4)

//Accessing data in multi dimentional Array 
var arr5 = [["test1",1],["test2",2],["test3",true]]
console.log(arr5)
console.log(arr5[1][1])

// push Function -- adds the element at the end
var arr6 = [10,20,30]
console.log("arr6 before " + arr6)
arr6.push(40)
console.log("arr6 after " + arr6)

// Pop Function -- removes the element at the end
var arr7 = [10,20,30,40]
console.log("arr7 before " + arr7)
arr7.pop()
console.log("arr7 after " + arr7)

// shift function -- removes the element at the begining
var arr8 = [10,20,30,40]
console.log("arr8 before " + arr8)
arr8.shift()
console.log("arr8 after " + arr8)

// unshift function -- adds the element at the begining
var arr9 = [10,20,30]
console.log("arr9 before " + arr9)
arr9.shift()
arr9.push(40)
console.log("arr9 after " + arr9)

// Resuable Functions & Argument
function sayHello(userName){
    console.log("Hello!! " + userName  + " Welcome to the JS Course")
}

function addNumber(a,b,c) {
    if(c == 1){
        console.log(a + b);
    }
    else{
        console.log(a - b);
    }
}

sayHello("test1");
sayHello("test2");
sayHello("test3");
sayHello("test4");
sayHello("test5");
sayHello("test6");
sayHello("test7");

addNumber(5,10,2);