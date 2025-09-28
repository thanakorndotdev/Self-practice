const students = [
  { name: "Ann", scores: [80, 90, 100], city: "Bangkok" },
  { name: "Bob", scores: [60, 70, 65], city: "Bangkok" },
  { name: "Cindy", scores: [95, 92, 88], city: "Chiang Mai" },
  { name: "Dan", scores: [40, 55, 50], city: "Chiang Mai" },
  { name: "Eva", scores: [85, 82, 90], city: "Bangkok" }
];

const withAverage = students.map(stu => {
  const avg = stu.scores.reduce((a, b) => a + b, 0) / stu.scores.length;
  return { ...stu, average: avg };
});

const passed = withAverage.filter(stu => stu.average >= 70);

const sorted = passed.sort((a, b) => b.average - a.average);

const report = sorted.map(stu => `${stu.name} (${stu.average.toFixed(2)})`);

const groupedByCity = withAverage.reduce((acc, stu) => {
  if (!acc[stu.city]) acc[stu.city] = [];
  acc[stu.city].push(stu.name);
  return acc;
}, {});

console.log("รายงานนักเรียนที่ผ่าน:");
console.log(report);

console.log("จัดกลุ่มตามเมือง:");
console.log(groupedByCity);
