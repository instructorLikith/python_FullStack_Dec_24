// Problem 1 : Reverse a String
// "hello world" --> "dlrow olleh"

function reverseString(str){
    var reversed = "";
    //logic for reversing
    for(var i = str.length - 1; i >= 0 ; i--){
        reversed += str[i];
    }

    //logic complete
    console.log(str)
    return reversed;
}

console.log(reverseString("hello world"));

// Problem 2 : Print largest Number
// arr = [10, 5 ,15 , 8, 25 , 22]  --> 25

function findMax(arr){
    var max = arr[0];

    for(var i = 1 ; i < arr.length ; i++){
        if(arr[i] > max){
           max = arr[i];
        }
    }

    console.log(max)
}

findMax([10, 5 ,15 , 8, 25 , 22])

//problem 3 : reverse letters in each word
//"hello world" --> "olleh dlrow"

function wordsReverse(str){
    var words = str.split(' ');
    console.log(words);
    var result = []
    console.log(words[0].split(''))
    for(var i =0; i < words.length ; i++){
        result.push(words[i].split('').reverse().join(''));
    }
    result.join(' ');
    console.log(result.join(' '));
}

wordsReverse("hello world");

//problem 4 : ⁠Write a function that removes duplicates from an array.
function removeDuplicate(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicate([1,2,2,3,4,5,5]))
// create empty array 
// loop input array
// 1 -> [1,2,3,4,5] check if the number exist in new array, if not add else reject


//problem 5 : ⁠Given an array containing numbers from 1 to N, with one number missing, find the missing number.
//1,2,3,4,5 = 15 ....  1,2,3,5 = 11 ....  15 - 11 = 4
function missingNumber(arr){
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((arr, curr) => arr + curr, 0);
    return expectedSum - actualSum;
}

console.log(missingNumber([1,2,3,5]))