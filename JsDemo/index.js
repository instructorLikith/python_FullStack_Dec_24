// Arguments
function add(a,b){
    console.log(a + b)
}

add(2,4)

// Scope - global & local

var global = 10; //global scope

function func1(){
    // var notGlobal = 5; //local scope
    notGlobal = 5; //global scope since var is not used
    var global = 20; //local scope get highest priority
    console.log("f1 global : " + global);
    console.log("f1 notGlobal : " + notGlobal);
}

function func2(){
    console.log("f2 global : " + global);
    console.log("f2 notGlobal : " + notGlobal);
}

func1();
func2();

// Return value from function

function reduceBy5(num){
    return num - 5;
}

function mulBy4(num){
    return num * 4;
}

console.log(reduceBy5(12));

console.log(mulBy4(2));

// binding returned value to var
var retunedValue = reduceBy5(20);
console.log(retunedValue);

// if Statement chaining
function isLessThan(val){
    if(val < 5){
        return "less than 5";
    }
    else if(val < 7){
        return "less than 7";
    }
    else {
        return "greater than 7";
    }
}

console.log(isLessThan(8));

// switch case
function switchCase(val){
    var awswer = "";

    switch(val) {
        case "print" :
            answer = "case 1";
            break;
        case 2 :
            answer = "case 2";
            break;
        default :
            answer = "nothing matched"
            break;
    }

    return answer;
}

console.log(switchCase(3));

// Loops
// for loop
// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// print even numbers using for loop under 10 (i = i + 2)
for(var i = 1; i < 10; i+=2 ) {
        console.log(i);
}

// Iterating through array
var myArr = [9,10,11,12,13]; // total sum 
var total = 0;

for(var i = 0; i < myArr.length ; i++){
    total += myArr[i];
}

console.log(total);

// while loop
var j = 6;
while(j < 5){
    console.log(j);
    j++;
}

// do while
var k = 6;
do {
    console.log(k)
    k++;
} while( k < 5)

// Objects  
// Building Objects
var car = {
   "color" : "white",
   "seat":5,
   "wheels":4,
   "brand":"ford"
}

// dot notation
var carColor = car.color;
console.log(carColor);

var carBrand = car.brand;
console.log(carBrand);

//bracket notation
var carSeat = car['seat'] 
console.log(carSeat);

var colorCode = {
    1 : "white",
    2: "red",
    3: "blue",
    4: "green"
}

var code = 3;
var color = colorCode[code]
console.log(color)

// Updating Property Values

car.brand = "toyota";
console.log(car.brand)

// adding new property 
car.rating = "5 star";
console.log(car)

//delete property
delete car.rating;
console.log(car)

//Testing objects for properties
function checkProp(prop) {
    if(car.hasOwnProperty(prop)){
        console.log("property available");
    }
    else{
        console.log("property not available")
    }
}

checkProp("color")

//Nested Objects
var car2 = {
    "inside" : {
        "seat" : "leather"
    },
    "outside" : {
        "color" : "white"
    }
}

var outColor = car2.outside.color;
console.log(outColor)