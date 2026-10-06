// const firstNum = 20;
// const secondNum = 0;

// console.log(firstNum % secondNum);
// console.log(firstNum / secondNum);
// const score = 70;

// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else if (score >= 60 && score <= 69) {
//   console.log("D");
// } else if (score <= 59 && score >= 0) {
//   console.log("F");
// } else {
//   console.log("Invalid Input");
// }

function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 60 && score <= 69) {
    console.log("D");
  } else if (score <= 59 && score >= 0) {
    console.log("F");
  } else {
    console.log("Invalid Input");
  }
}
calculateGrade(54)
