//1.function declaration
function multiply(a,b){
        return a*b;
}
console.log("1.function declaration")
console.log(multiply(2,3));

//2. function expression (using arrow function syntax)
const multiply2 = (a,b)=>{return a*b};
console.log("2..function expression (using arrow function syntax)");
console.log(multiply2(4,5));

//3. function expression(using function syntax)
const multiply3 = function(a,b){return a*b};
console.log("3. function expression(using function syntax)");
console.log(multiply2(6,7));

console.log(typeof multiply);
console.log(typeof multiply2);
console.log(typeof multiply3);

const x = multiply;
const y = multiply2;
const z = multiply3;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

if(x === multiply)
    console.log("x equals to multiply1");
else
    console.log("x equals to multiply1");

function sayGoodBye(){
    return 'Good Bye';
}
function doSomething(){
    return sayGoodBye;
}
console.log(doSomething()());


function myFunc(theObject){
    theObject.model = "A9999";
}

const product = {model: "A1001", price:199};
console.log(product.model);
myFunc(product);
console.log(product.model);

function square(side){
    side = 9;
    return side;
}
let theSide = 2
square(theSide)
console.log(theSide)

function sum(x,y){
    let count = 0;
    for(argu of arguments){
        count += argu;
    }
    return count;
}

console.log(sum(5,1,4,a=32));

function greeting(greet = "Hello", whom = "Guest", quote = "How are you?"){
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("Hi"));
console.log(greeting("Good moreing","Guy","Great!"));
console.log(greeting(undefined,null,"Fine"));
console.log(greeting());


function sum2(num1,num2,num3){
    result = num1+num2+num3;
    return result;
}

console.log(sum2(10,20));

function arrayAdd2([x1,y1],[x2,y2]){
    return x1 + y1 + x2 + y2
}

const b = [3,2]
const c = [5,4]
console.log(arrayAdd2(b,c))

const students = {
    studentID: 64001,
    displayName: 'jsGuy',
    name: 'Jeongwon' ,
    fullName : {
        firstName: 'Somchai',
        lastName: 'Deejai'
    }
}
function getFirstName(name){
    return name;
}

console.log(getFirstName(students))

function getFreqofWords(sentence){
    if(typeof sentence === 'string'){
        sentenceLow = sentence.toLowerCase();
        word = {};
        wordArray = sentenceLow.split(' ')
            for (let i of wordArray){
                if(i in word){
                    word[i] = word[i] + 1;
                }
                else{
                    word[i] = 1
                }
            }
            return word;
        }
    else{
        return undefined;
    }
}

console.log(getFreqofWords('Today is present and present is your gift'));
console.log(getFreqofWords('Do you best just do it'));
console.log(getFreqofWords(null));
console.log(getFreqofWords(undefined));