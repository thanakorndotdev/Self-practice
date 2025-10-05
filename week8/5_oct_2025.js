//โจทย์ refference by chatgpt
// Objective:
// เขียนฟังก์ชัน returnCarYear(car) ที่รับค่าเป็นอาร์เรย์ของอ็อบเจ็กต์รถยนต์ แล้วคืนค่าเฉพาะรถยนต์ที่มีข้อมูลถูกต้องตามเงื่อนไข

// Conditions:
// ให้คืนค่าเฉพาะอ็อบเจ็กต์ที่ตรงตามเงื่อนไขทั้งหมดต่อไปนี้:

// name เป็นชนิดข้อมูล string

// type เป็นชนิดข้อมูล string

// year เป็นชนิดข้อมูล number

// age เป็นค่าที่เป็นจำนวนจริง (finite)

// age มากกว่า 1

// vaccinated มีค่าเป็น true

// ถ้าข้อมูลที่รับเข้ามา ไม่ใช่อาร์เรย์ ให้คืนค่าเป็นอาร์เรย์ว่าง []
//Human Thinking(me)
function returnCarYear(car) {
  if (!Array.isArray(car)) return [];

  return car.filter(car => {
    return car
      && typeof car.name === "string"
      && typeof car.type === "string"
      && typeof car.year === "number"
      && Number.isFinite(car.age)
      && car.age > 1
      && car.vaccinated === true;
  });
}

//AI USE to make Test by chatgpt
const valid1 = { name: "Civic", type: "sedan", year: 2020, age: 3, vaccinated: true };
const valid2 = { name: "Fortuner", type: "suv", year: 2019, age: 5, vaccinated: true };

const invalids = [
  { name: 123, type: "sedan", year: 2020, age: 3, vaccinated: true },           // name not string
  { name: "City", type: 999, year: 2020, age: 3, vaccinated: true },            // type not string
  { name: "Altis", type: "sedan", year: "2020", age: 3, vaccinated: true },     // year not number
  { name: "Model 3", type: "sedan", year: 2021, age: Infinity, vaccinated: true },// age not finite
  { name: "Jazz", type: "hatch", year: 2022, age: 1, vaccinated: true },        // age <= 1
  { name: "Yaris", type: "hatch", year: 2018, age: 4, vaccinated: false },      // not vaccinated
  { name: "Accord", type: "sedan", year: 2017, age: 6 },                        // missing vaccinated
  { type: "truck", year: 2015, age: 9, vaccinated: true },                      // missing name
  null,
  undefined,
  {}
];

// 1) Non-array input
console.log("Test 1: Non-array input");
console.log(returnCarYear(undefined)); // []
console.log(returnCarYear("string"));  // []
console.log(returnCarYear({}));        // []

// 2) Mixed array (valid + invalid)
console.log("\nTest 2: Mixed array (should return only valid cars)");
const mixed = [valid1, ...invalids, valid2];
console.log(returnCarYear(mixed)); // [valid1, valid2]

// 3) Empty array
console.log("\nTest 3: Empty array");
console.log(returnCarYear([])); // []

// 4) Boundary check (age and vaccinated)
console.log("\nTest 4: Boundary values");
const edge = [
  { name: "Edge1", type: "sedan", year: 2020, age: 1.0001, vaccinated: true }, // valid
  { name: "Edge2", type: "sedan", year: 2020, age: 1, vaccinated: true },      // invalid
  { name: "Edge3", type: "sedan", year: 2020, age: 2, vaccinated: true },      // valid
  { name: "Edge4", type: "sedan", year: 2020, age: 2, vaccinated: "true" },    // invalid
];
console.log(returnCarYear(edge)); // [Edge1, Edge3]

// 5) Check order is preserved
console.log("\nTest 5: Order preservation");
console.log(returnCarYear([valid2, valid1])); // should keep order [valid2, valid1]

// 6) Mutation check (input array should not be changed)
console.log("\nTest 6: Mutation check");
const before = JSON.stringify(mixed);
returnCarYear(mixed);
console.log(before === JSON.stringify(mixed) ? "✅ not mutated" : "❌ mutated");
