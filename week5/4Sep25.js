let result = ""
for (let i = 1; i <= 10; i++){
    let num = i;
    result +=  num + " "
}
console.log(result)    

let sum = 0
for(let i = 0; i <= 100; i++){
    sum += i
}
console.log(sum)

let numCal = 7
for(let i = 1;i <= 12;i++){
    console.log(numCal ,"x ", i , "=" , numCal*i)
}

let sum1 = 0
for(let i = 0; i <= 50; i++){
    if(i % 2 === 0){
        sum1 += i
    }
}
console.log(sum1)

let result1 = ""
for (let i = 1; i <= 20; i++){
    let num = i**2;
    result1 += num + " "
}
console.log(result1)    

for(let i = 1; i <= 5; i++){
    console.log("*".repeat(i))
}

for(let i = 0; i <= 5; i++){
    console.log("*".repeat(i))
}
let primes = [];

for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}

console.log(primes.join(" "));

  for (let i = 0; i < 5 ; i++) {
    let space = " ".repeat( 5 - i - 1);
    let stars = "*".repeat(2 * i + 1);
    console.log(space+stars)
  }
let n = 5;
let result2 = 1;
for(let i = 1; i <= n; i++){
    result2 = result2 * i;
}
console.log(result2);