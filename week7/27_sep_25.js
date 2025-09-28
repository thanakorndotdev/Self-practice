let a1 = 2, d = 3, n = 5;
let termsAP = [];
let sumAP = 0;

for (let i = 0; i < n; i++) {
  let term = a1 + i * d;
  termsAP.push(term);
  sumAP += term;
}

console.log("AP Terms:", termsAP);  
console.log("AP Sum:", sumAP);     

function progression(type, a1, step, n) {
  let terms = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let term;
    if (type === "AP") {
      term = a1 + i * step;
    } else if (type === "GP") {
      term = a1 * Math.pow(step, i);
    } else {
      throw new Error("Invalid type! Use 'AP' or 'GP'");
    }
    terms.push(term);
    sum += term;
  }

  return { terms, sum };
}

// ทดลอง
console.log(progression("AP", 1, 2, 6));

console.log(progression("GP", 2, 3, 5));
