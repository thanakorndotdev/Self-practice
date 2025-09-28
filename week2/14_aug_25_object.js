// Object literal
const person1 = {
    name: "Cher",
    age:"20",
    birthdate:"2005-03-01",
    gender:"female" ,
    Education :[{School:"King Mongkut's University of Technology Thonburi", Factuly:"Science", Major:"Physics"}]
}

const book={isbn:12345678, 
    isbn:656, 
    title:'Introduction to JS',
    authors:[{firstname:'John'}, {lastname:'Smith'},
        {firstname:'Danial'},{lastname:'Doh'}], 
    versions:[1.0, 2.0,3.0], 
    isAvailable:true, 
    getISBN(){return this.isbn}
    }

console.log(person1.Education)
console.log(book)
console.log(book.getISBN())
console.log(book.authors[0].firstname, book.authors[0].lastname)

//new Date(year, monthIndex, day)
book.publishDate=new Date(2025, 1, 1)
// console.log(book)
delete book.isAvailable
// console.log(book)
console.log(book["publishDate"])
console.log(book.publishDate)

for (const Education in person1) {
//    console.log(book.key) //not allowed
console.log(person1[Education])
}

//2. constructor function
function Person(name,age,birthdate,gender){
    this.name = name
    this.age = age
    this.birthdate = birthdate
    this.gender = gender
}

//3. class

class Person2{
    constructor(name,age,birthdate,gender){
        this.name = name
        this.age = age
        this.birthdate = birthdate
        this.gender = gender
    }
    getname(){
        return this.name;
    }
    setage(age){
        this.age = age;
    }
    getinfop2(){
        return `name: ${this.name}, age:${this.age}`
    }
};
const myP2 = new Person2("Seok",19,"2006-3-4","male");
console.log(myP2.getname());
console.log(myP2.getinfop2());
console.log(myP2.setage(25));
console.log(myP2.getinfop2());

//4. using object.create(existingObj)
const journal = Object.create(myP2)
journal.age = 26
console.log(journal)
console.log(journal.age)
console.log(journal.name)


const b4={id:1, title:"JS"}
function doSomething (x){
    x={id:2, title: "Py"}
    x.id=555
}
console.log(b1) 
doSomething (b1)
console.log(b1) 


let b5 = {id:1,title:"JS"}
let b6 = {id:1,title:"JS"}

console.log(b2==b3)
console.log(b2===b3)

function comparebook (x,y){
    return x.isbn === y.isbn?true:false
}

const b1 = {isbn:123, title:"JS"}
const b2 = {isbn:123, title:"JS"}
const keys = Object.keys(b1)
const Values = Object.values(b1)
console.log(keys)
console.log(Values)
console.log(comparebook(b1,b2))