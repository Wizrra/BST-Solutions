// Task 1

// name
const name = "Faith";

// age
let age = 30;

// Country
let country = "Canada";

// isStudent
let isStudent = true;

// template literal
let introduction = `My name is ${name}, I am ${age} years old, I live in ${country}, and it is ${isStudent} that I am a student. And I will be ${age + 5} years old in the next 5, I will as well be ${age + 10} years old in the next 10 years, and ${age + 20} years old in the next 20 years of my life`;

console.log(introduction);

// const was used because my name can't change. My name is constant.
// let was used for age, country and isStudent because those person's status can change over time.
// String is used for text, while a numbers is used for digits.
// A boolean is used to choose between true or false, or 0 and 1

// Task 2
const firstNumber = 20;
const secondNumber = 6;
const thirdNumber = 0;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);

// In a case where the second number is 0
console.log(firstNumber + thirdNumber);
console.log(firstNumber - thirdNumber);
console.log(firstNumber * thirdNumber);
console.log(firstNumber / thirdNumber);
console.log(firstNumber % thirdNumber);

// In a case where probably the user  uses zero as the third number and is dividing the first number by the third number, it will show infinity because you can't divide a number by 0, it is undefined. Hence what i will do is to give them a message telling them there is an error.

// Task 3
const English = 78;
const Mathematics = 85;
const Javascript = 92;
const Design = 70;

const totalScore = English + Mathematics + Javascript + Design;
const average = totalScore / 4;

console.log(totalScore);
console.log(average);

if (average < 0) {
  console.log("Invalid score");
} else if (average > 90) {
  console.log("A");
} else if (average > 80) {
  console.log("B");
} else if (average > 70) {
  console.log("C");
} else if (average > 60) {
  console.log("D");
} else if (average > 0) {
  console.log("F");
}

// reusable function
function calculateGrade(English, Mathematics, Javascript, Design) {
  let total = English + Mathematics + Javascript + Design;
  return total / 4;
  // console.log(average);
}
let Hikmah = calculateGrade(78, 85, 92, 70);
console.log(Hikmah);

let Fatimah = calculateGrade(48, 75, 92, 10);
console.log(Fatimah);

// Task 4

const username = "admin";
const password = "12345";

function CheckLogin(usernameInput, passwordInput) {
  if (!usernameInput || !passwordInput) {
    return "Invalid username or password";
  }

  if (passwordInput.length < 5) {
    return "Password must be at least 5 characters long";
  }

  if (usernameInput === username && passwordInput === password) {
    return "Login successful";
  } else {
    return "Invalid username or password";
  }
}

console.log(CheckLogin("admin", "12345"));
console.log(CheckLogin("admin", "123"));
console.log(CheckLogin("user", "12345"));

// = is used to put a value into a variable eg: cost = 5 or let = 5
// == is the weak equality sign used to compare two things but it ignores their data types by converting them.
// === is the strong equality sign used to compare two things and it checks their data types as well.
// && is the the sign used to check if both equal sign given are true, if one of them is wrong, it will return false.
// || is used to check if at least one of the value is true.

// Task 5
function calculateExpenses(food, transport, internet, entertainment, income) {
  
  const totalExpenses = food + transport + internet + entertainment;

  const averageExpense = totalExpenses / 4;

  const highestExpense = Math.max(food, transport, internet, entertainment);

  const remainingMoney = income - totalExpenses;

  return {
    totalExpenses: totalExpenses,
    averageExpense: averageExpense,
    highestExpense: highestExpense,
    remainingMoney: remainingMoney
  };
}

const myReport = calculateExpenses(5000, 3000, 7000, 4000, 100000);

console.log("Total Expenses:   " + myReport.totalExpenses);   
console.log("Average Expense: " + myReport.averageExpense); 
console.log("Highest Expense: " + myReport.highestExpense); 
console.log("Remaining Money: " + myReport.remainingMoney); 
