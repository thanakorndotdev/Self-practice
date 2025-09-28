/* 1. write a script to print the factorial of 1 to n.
print "ERROR" if n is not an integer or n is less than 0;
print 0 1 if n is 0 (because 0! = 1)
e.g.,
1 1
2 2
3 6
4 24
...
n n!
*/
// // loop to print i and i! until i==n

var n = 6;
if(n === 0){
    console.log("0!", 1);
}
else if (n > 0){
    let resultn = 1;
        for (let i = 1; i <= n ; i++){
            resultn *= i;
            console.log(i,resultn);
        }
} 
else{
    console.log("ERROR");
}

/*

2. count (and print) the number of vowels (i.e., 'a', 'e', 'i', 'o', 'u'; 
case-insensitive) in a string <s>. if <s> is not a string, print "ERROR".
Use switch-case to get full credit.
*/
s = "asdqew";
checks = typeof s;
if (checks === "string"){
    let count = 0;
    s = s.toUpperCase();
    for(let i = 0; i <= s.length; i++){
        let ch = s[i];
        switch(ch){
            case 'A':
                count++;
                break;
            case 'E':
                count++;
                break;
            case 'I':
                count++;
                break;
            case 'O':
                count++;
                break;
            case 'U':
                count++;
                break;
            default:
        }
    }
    console.log(count);
}
else{
    console.log("ERROR");
}

/* 
3. check if n is a prime number.
print YES if n is a prime number. Otherwise, print NO.
the followings are not prime numbers:
"string", "2", NaN, Infinity, -3, null, ...

A prime number is a positive integer (> 1) 
that is divisible only by 1 and itself.
*/

var n =99;
let isPrime = true;
if(!Number.isInteger(Number(n)) || n <= 1){
    console.log("NO");
}
else{
    for(let i = 2; i < n; i++) {
        if (n % i === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log("YES");
    }
    else{
        console.log("NO");
    }
}

for(let i =0; i <= 5; i++){
    console.log("*".repeat(i));
}
