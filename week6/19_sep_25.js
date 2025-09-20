//WHILE LOOP
let i = 0;
while (i < 5) {
  console.log("while count:", i);
  i++;
}

let num = 1;
let sum = 0;
while (num <= 5) {
  sum += num;
  num++;
}
console.log("while sum:", sum); 

let x = 1;
while (x <= 10) {
  if (x % 2 === 0) {
    console.log("first even number:", x);
    break; 
  }
  x++;
}

const fruits = ["apple", "banana", "cherry"];
let idx = 0;
while (idx < fruits.length) {
  console.log("fruit:", fruits[idx]);
  idx++;
}

//DO...WHILE LOOP

let j = 0;
do {
  console.log("do...while count:", j);
  j++;
} while (j < 5);

let k = 10;
do {
  console.log("do...while run at least once:", k);
  k++;
} while (k < 5); 

let pass;
do {
  pass = "1234"; 
  console.log("Password entered:", pass);
} while (pass !== "1234");

const colors = ["red", "green", "blue"];
let idy = 0;
do {
  console.log("color:", colors[idy]);
  idy++;
} while (idy < colors.length);
