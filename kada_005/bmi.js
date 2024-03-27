function calculateBMI(weight, height) {
  let bmi = weight / ((height / 100) * (height / 100));
  return bmi.toFixed(15); 
}

let weight = 68; 
let height = 170;

let bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
