// 1) filter
const words = ['mango','apple','mangosteen','orange']; // แก้สะกด
const shortWords = words.filter(w => w.length <= 6);

// 2) sort 
const sortedWords = [...words].sort();

// 3) map
const upperWords = words.map(w => w.toUpperCase());

// 4) map -> filter
const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
];
const evenIds = students.map(s => s.id).filter(id => id % 2 === 0);

// 5) some + includes
const words2 = ["Mango", "Apple", "mangosteen", "orange","mangoes"];
const hasApple = words2.some(w => w.toLowerCase().includes('apple'));

// 6) reduce total
const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10,  quantity: 3 },
  { productId: 1003, price: 5,   quantity: 10 },
];
const total = cart.reduce((sum,i)=> sum + i.price * i.quantity, 0);

// 7) push/pop/unshift/shift 
const cart2 = [...cart];
cart2.push({ productId: 5555, price: 1, quantity: 4 });  // length +1
const popped = cart2.pop();                               // ลบท้าย
const newLen = cart2.unshift({ productId: 9999, price: 7, quantity: 1 }); // length ใหม่
const shifted = cart2.shift();                            // ลบหัว

// 8) splice vs slice
const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"];
const removed1 = words1.splice(2,1,'banana'); // mutate
const slice1 = words1.slice(2, words1.length); // new array, no mutate
