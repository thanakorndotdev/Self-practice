const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
 
function getPassingNames(studentScores){
    let studentPass = [];
    for(let i = 0; i < studentScores.length; i++){
        let student = studentScores [ i ];
        if(student.score >= 70 ){
            studentPass.push(student.name.toUpperCase());
        }
    }
    return studentPass;
}
 
const passingNames = getPassingNames(studentScores)
console.log(passingNames);
 
console.log(Array.isArray([]))

const array14 = [1,30,4,21,1000]
array14.sort((a,b) => a-b);
console.log(`array14: ${array14}`)

const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

const sortStds = stds.sort((x,y) => {
    const wordX = x.name.toLowerCase();
    const wordY = y.name.toLowerCase();
    if(wordX < wordY){
        return -1;
    }
    else if(wordX > wordY){
        return 1;
    }
return 0;
})
console.log(sortStds);