let book1 = {
    isbn: 123456789,
    title: "JavaScript",
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript",
}

// shallowEquality Function In slide Page
function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }
    return true
}

console.log("shallow equality: " + shallowEquality(book1, book2)) //true

console.log(Object.keys(book1))
console.log(Object.keys(book2))
Object.keys(book1).forEach(key => {
  console.log(key, ":", book1[key]);
});

// object_keys_cheatsheet.js

// Example object Case
const user = { name: "Jin", age: 20, job: "Developer" };

// 1. for...in (พร้อม hasOwnProperty)
console.log("=== for...in (with hasOwnProperty) ===");
for (const key in user) {
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    console.log(key, ":", user[key]);
  }
}

// 2. Object.keys() + forEach
console.log("\n=== Object.keys() + forEach ===");
Object.keys(user).forEach(key => {
  console.log(key, ":", user[key]);
});

// 3. Object.values()
console.log("\n=== Object.values() ===");
console.log(Object.values(user)); // ["Jin", 20, "Developer"]

// 4. Object.entries()
console.log("\n=== Object.entries() ===");
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 5. for...of กับ Array
console.log("\n=== for...of (Array) ===");
const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log(num);
}

// 6. ตรวจสอบ property มีอยู่จริง
console.log("\n=== Check property with 'in' operator ===");
if ("age" in user) {
  console.log("User has age:", user.age);
}

// 7. รวม keys จากหลาย object (merge)
console.log("\n=== Merge objects + Object.keys() ===");
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log(Object.keys(merged)); // ["a", "b", "c"]

// 8. Filter keys ตาม type ของค่า
console.log("\n=== Filter numeric keys ===");
const product = { name: "Phone", price: 1000, discount: 0.1 };
const numericKeys = Object.keys(product).filter(
  key => typeof product[key] === "number"
);
console.log(numericKeys); // ["price", "discount"]

// 9. Shallow Equality function (improved)
console.log("\n=== Shallow Equality ===");
function shallowEquality(object1, object2) {
  if (typeof object1 !== "object" || object1 === null ||
      typeof object2 !== "object" || object2 === null) {
    return false;
  }

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(object2, key)) return false;
    if (!Object.is(object1[key], object2[key])) return false;
  }
  return true;
}

console.log("shallow equality:", shallowEquality(book1, book2)); // true

// 10. ใช้ Object.entries() แสดงรายละเอียด object
console.log("\n=== Object.entries() display ===");
Object.entries(book1).forEach(([key, value]) => {
  console.log(`- ${key}: ${value}`);
});
