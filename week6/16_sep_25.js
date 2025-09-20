const greet =(name, formatter) => formatter(name)
const shout = text => text.toLowerCase() + "!!"
const like = text1 => text1+ " Chop He"
console.log(greet('alice',like))

function idGenerator(){
    let count = 0;
    return function(){
        ++count;
        return count
    }
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())

function outerFunction(a){
    return function(b){
        return a + b
    }
}

const addFive = outerFunction(5)
console.log(addFive(3)) // 8
const addTen = outerFunction(10)
console.log(addTen(2)) // 12

let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
  let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    console.log(`dosomething: ${y + sum + x + mid + final}`)
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
  }
  return mid + final + x + y + sum
}
const score = getScore(1)
console.log(score)

