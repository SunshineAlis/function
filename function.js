//ex-1
// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))
let a=7;
let b=15;
function sum(a, b) { return a+b; }
console.log(sum(a,b))
//ex-2
// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))
let base=10
let height=12

function triangle(base,height)
{return 0.5*base*height;
}
console.log(`Triangle area is`,triangle(base,height))
 //ex-3
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))

let he=6;
let width=6;
function rectangleOfPerimitr(he,width){return (he+width)*2;}
console.log(rectangleOfPerimitr(he,width))
//ex-4 
// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))
let na=3;
function squire(na){return na**2;}
console.log(squire(na)) 
//ex-5
// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))
let time=4;
function hourToSecond(time){return time*60*60}
console.log(hourToSecond(time));
// Create a function that  takes a string as argument and returns the length of this string.
 let string="Hello World"

 function stringslenght(string){return string.length;}
 console.log(`string lenght is`,stringslenght(string))
 //ex-6
// write a function that takes a string as argument and returns it to number
let str= "hello 123"
function extractnumbers(str){
    return str
    .split(' ')//stringee zadlana.element hooronz zai avna.
    .filter(item => !isNaN(item))//filter= too bish elementuudig shuune.
    //isNan=>tuhain zuil ni too bish esehig shalgadag uildel tul massivt zovhon toonuudig hadgalna. 
    .map(Number);//mornii toog bodit too  bolgon huvirgana.
}
console.log(extractnumbers(str))
//ex-7
// write a function that takes a number as argument and returns it to string
let st="hello 234"
function extractletters(st){return st
    .split(" ")
    .filter(item =>isNaN(item)) //tuhain element too bish esehig shalgana/
    .join(" ");// txt letter bvl join avna shuuj uldeesen elementig neg mor bolgono

}
 console.log(extractletters(st))
// Exercise 8
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
function divisibleBy3() { let result=[];
    for(let i=1;i<100;i++)
    {if(i%3===0)
        {result.push(i);}//3t huvaavdaj bga toogoo array-d nemeh
    }
    return result;
    
}
console.log(`fizz`,divisibleBy3())

 function divis(num){
    if(num%3===0)
       {return `${num} tiimee 3t huvaagdana`;} else 
    {return `${num} ni3-t huvaagdadgui too bn`} 
    }
let input =13;
let num=parseInt(input)
console.log (divis(num))
//ex-9
//<li>If input/parameter is divisible by 5 print => Buzz</li>
function divisbleBy5(){let result=[];
    for (let i=1;i<100;i++)
    {if(i%5===0){result.push(i);}
}
return result;
}
console.log( `1-100 hurtelh 5-d huvaagddag toonuud`, divisbleBy5())
//ex-10
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
function divisbleBy3and5(){
    result=[];
    for(let i=1;i<100;i++){
        if(i%3===0 && i%5===0){result.push(i)}
    }
    return result;
}
console.log(`3bolon5-d zereg huvaagddag toonuud`,divisbleBy3and5())
//ex-11
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>

function notDivisbleBy3And5(){ let result=[];
for(let i=1; i <= 100;i++ ){
    if(i%3 !== 0 && i%5 !== 0)//anhaarlin temdeg huvagchin ard tentsuugin umnu irj irne sorog utga der
        {result.push(i);}
}
return result;
}
console.log(`3 bolon tavd zereg huvaagdadgui toonuud`,notDivisbleBy3And5())
//12
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
function checkNumber(input) {
    if (typeof input !== 'number' || isNaN(input)) {
        return 'NaN - Not a Number! Please Input Number';
    } else {
        return (input)
    }
}
console.log(checkNumber(123));          // Output: Valid Number: 123
console.log(checkNumber("Hello"));     // Output: NaN - Not a Number! Please Input Number

// Exercise 13
 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
let n=7;
 function factorial(n){
    if(n<0){return "factorial negative" }
    let result = 1;
    for(let i=1;i <= n; i++){
    result *=i;
 }
 return result}
 console.log(`n factorial is ${factorial(n)}`)
// Example:
// > console.log(factorializer(7));
// > 5040
 
// Exercise 14
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd
let s=14;
function oddOrEven(s){if(s%2===0) 
    {return "even"} 
else{return "odd"} }
console.log(oddOrEven(s))
// Exercise 15
// Return the sum of a number going back to it's root. In other words, 
//the function will work like this:
 
// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36
let l=8;
function addUp(l){
    let result=0; for(i=0;i<=l;i++){
    result +=i}
 return result;
}
 console.log(`l toonii niilber; ${addUp(l)}`)
// Exercise 16
// Create a function  that takes a string as argument and returns true
// if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false
let stra="";
function stringOfCheck(stra){ if (stra.length===0)
    {return true;} 
    else 
    {
         return false;}
}
console.log (stringOfCheck(stra));
// Exercise 17
 
// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total 
//number of characters in the second string.
// Otherwise return false.
 
// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

let str1="Simplon";
let str2="tunis";
function isEqualStr(str1,str2){
    const length1 = str1.trim().length;
    const length2 = str2.trim().length;
 return length1==length2;
}
   console.log(isEqualStr(str1,str2));

// Exercise 18
 
// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false
let a1=9;
let b1=3;

function dividedbyb(a1,b1){if(a1%b1===0)
    {return true}else
    {return false}
}
 console.log(dividedbyb(a1,b1))
// Exercise 19
 
// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

 let moodToday="hi ";
 function moodtoday(moodtoday){
    if (moodToday==="happy"){return "Today, I am feeling happy"}
    else if (moodToday===" "){
        return "Today, I am feeling neuter"
    } else{return "Today, I am feeling neuter"
    }
 }
 console.log(moodtoday(moodtoday))
// Exercise 20
 
// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false
 let input1="HELLO WORLD";
let output1=swapCase(input1)
 function swapCase(input1){
    let result = ""; 
    for (let char of input1) {
        // Үсэг бол шалгаж, хөрвүүлнэ
        if (char === char.toUpperCase()) {
          result += char.toLowerCase(); 
    }else{result += char.toUppercase();
    }
}
    return result;}
console.log(swapCase(input1))

   function match(stra1,stra2){
         return stra1.toLowercase()===stra2.toLowercase()
      }
   let stra1="mask";
   let stra2="mAskinG";
   console.log(match(stra1, stra2));
console.log(match("HELLO WORLD"),("hello world"))
//
function match(stra1, stra2) {
    // Compare strings after converting them to lowercase
    return stra1.trim().toLowerCase() === stra2.trim().toLowerCase();
}

// Жишээ ашиглалт
console.log(match("mask", "mAskinG"));       // Үр дүн: false
console.log(match("hello world", "HELLO WORLD")); // Үр дүн: true
// // Exercise 21
 
// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
 
// Exercise 22
 
// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
 
// Exercise 23
 
// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
 
// Exercise 24
 
// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
 
// console.log("functions2");
 
// Exercise 25
 
// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
 
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
 
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6
 
// Exercise 26
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
 
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
 
// Exercise 27
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
 
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23
 
// Exercise 28
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
 
// Exercise 29
 
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
 
// Exercise 30
 
// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
 
// Exercise 7
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
 
// Exercise 8
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
 
// Exercise 9
 
// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
 
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
 
//Exercise
 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
// You can return the answer in any order.
 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
//Exercise
 
// Given an integer x, return true if x is palindrome integer.
 
// An integer is a palindrome when it reads the same backward as forward.
 
// For example, 121 is a palindrome while 123 is not.
 
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
 
//Exercise
 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 
// An input string is valid if:
 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
 
// Input: s = "()"
// Output: true
// Example 2:
 
// Input: s = "()[]{}"
// Output: true
 
//Exercise
 
// write a JavaScript function that checks if the string is palindrome or not.
 
// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.
 
// Input: s = "dad"
// Output: true
// Example 2:
 
// Input: s = "civic"
// Output: true
 
// Input: s = "race"
// Output: false