
//Set Value of Array to test in Arr1.
let arr1 = ["string",true,63,1,2,false,null,3,4,5,"Chop","string",null];

console.log("Length of Array1 is " + arr1.length); //How to count What Size(length) of Array
console.log("Array 1 is " + arr1); //How arr1 have?
console.log("Last Array of 63 : " + arr1.lastIndexOf(63));//Last of index (Number's 63 postion)
console.log("Index Array of string : " +arr1.indexOf("string"));//first index (String's "string" postion)
console.log("Last Index Array of string : " + arr1.lastIndexOf("string"));//Last of index (String's "string" postion)
console.log(arr1.at(0));//Array index postion is 0

//Loop Array to make it to be string.
//We learn about for loop to use and conditional. 
for (let i = 0; arr1.length >= i; i++){
    console.log("Last index of "+ i + " " +arr1.at(i));
}

//delete Array Postion of 2 We count at 0.
delete arr1[2];
console.log(arr1);

console.log(arr1.length); //Test length of arr1 after delete We See Delete vaule will be emtry item.

arr1.splice(2,2,'63','65'); //get new value first of 2 is offset(Postion or index) Second of 2 is Delete n Postion.
console.log(arr1);//Test Result

let arr3 = [[1,2,3,4],["red","blue","green","white"]];
console.log(arr3[1]); //return arr index 2 and test array in array is work?
console.log(Array.isArray(arr3));//Check arr3 is Array.

//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}];
console.log(colors); //same arr3.
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}];
console.log(contacts) ;//same arr3.
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']];
console.log(groups);//same arr3.

console.log(contacts[0].email[0]); //return only arr of email from contact index 0 only.

const lastMem = groups.map(groups => groups[groups.length - 1]);// use map to make it to total between array index 0 and 1 and select last of array.
console.log(lastMem);//return result of last member of group name.

let c = [5,10,15];
let b = [0,...c,20]; //test Spread operator with Array c and Array c have 5,10,15.

console.log(b); //it will return [0,5,10,15,20] same in math of Spread operator.

//spread operator
const greeting= ["Hello world"]; //test Spread operator at array How it work.
const greetingCH = [...greeting]; // same of Array B if have ...x I will import x value in case We write add greeting ["Hello world"] greetingch array is same.

console.log(greetingCH);//result of greetingch.
const cloneGreeting = ['checked',...greetingCH,'done'];//test with array same greetingch but it not all because we have checked in index 0 and done at index 2.
console.log(cloneGreeting);//return result again but in cloneGreeting Array.

//Construcutre Array.

let arr4 = new Array();
let arr5 = new Array(10);
let arr6 = new Array(10,20,30);

console.log(arr4); //result arr4 but we write in Construcutre Array.
console.log("arr4",arr4.length); //length of array arr4 with Construcutre Array.
console.log(arr5);//result arr5 but we write in Construcutre Array.
console.log("arr5",arr5.length); //length of array arr5 with Construcutre Array.
console.log(arr6);//result arr6 but we write in Construcutre Array.
console.log("arr6",arr6.length); //length of array arr6 with Construcutre Array.
let arr7 = Array.of(10,20,30,40); // of function of Array.
console.log(arr7);//result arr7 but we write in of function.
console.log(arr7.length);//length arr7 but we write in of function.
let arr2 = Array.from(arr7);//from function of array use arr7.
console.log(arr2);//result of arr2 is use from arr7.

let letters = [...'Hello world']; //spread operator can make it 1 word per 1 array if don't have value if will be string.
console.log(letters); //result of letters.

//All Test or learning in this code It's from classroom and something I will want to know I write and test by myself and I find in w3school or mdn.