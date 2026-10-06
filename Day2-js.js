// Task 1
function Celcius(C) {
  // let C = 30;

  if (typeof C !== "number" || C === "") {
    return "Invalid input, kindly type in a number";
  }
  return C * 1.8 + 32;
}

function Fahrenheit(F) {
  // let F = 86;
  if (typeof F !== "number" || F === "") {
    return "Invalid input, kindly type in a number";
  }
  return (F - 32) / 1.8;
}

console.log(`The Conversion of celcius(30) to Fahrenheit is ${Celcius(30)}`);
console.log(`The Conversion of Fahrenheit(86) to Celcius is ${Fahrenheit(86)}`);
console.log(Celcius(""));
console.log(Fahrenheit("hello"));

// Task 2

function calculateAge(birthYear, currentYear) {
  if (typeof birthYear !== "number" || typeof currentYear !== "number") {
    return "Error: Birth year and current year must be numbers.";
  }
  if (birthYear > currentYear) {
    return "Error: Birth year cannot be in the future.";
  }
  if (birthYear < 1900) {
    return "Error: Please enter a realistic birth year.";
  }
  return currentYear - birthYear;
}

function canVote(age) {
  if (age < 18) {
    return "Can't vote";
  }
  return "Welcome, you are eligible to vote";
}
console.log(canVote(7));

console.log(calculateAge(2005, 2026));
console.log(calculateAge(2030, 2026));
console.log(calculateAge("hello", "Hi"));

// Task 3

function checkPassword(password) {
  if (typeof password !== "string") {
    return { status: "Weak", missingRules: ["Password must be text."] };
  }

  const missingRules = [];

  if (password.length < 8) {
    missingRules.push("At least 8 characters");
  }
  if (!/[0-9]/.test(password)) {
    missingRules.push("At least one number (0-9)");
  }
  if (!/[A-Z]/.test(password)) {
    missingRules.push("At least one uppercase letter (A-Z)");
  }
  if (!/[a-z]/.test(password)) {
    missingRules.push("At least one lowercase letter (a-z)");
  }

  let status = "Strong";
  if (missingRules.length === 0) {
    status = "Strong";
  } else if (missingRules.length <= 2) {
    status = "Medium";
  } else {
    status = "Weak";
  }

  return {
    status: status,
    missingRules: missingRules,
  };
}

console.log(checkPassword("pass"));

console.log(checkPassword("Pass1234"));

// Task 4
const product1 = 15000;
const product2 = 25000;
const product3 = 10000;

function calculateSubtotal(price1, price2, price3) {
  return price1 + price2 + price3;
}

function calculateDiscount(subtotal) {
  if (subtotal <= 20000) {
    return 0;
  } else if (subtotal <= 50000) {
    return subtotal * 0.05;
  } else {
    return subtotal * 0.1;
  }
}

function calculateFinalTotal(subtotal, discountAmount) {
  return subtotal - discountAmount;
}

let subtotal = calculateSubtotal(product1, product2, product3);
console.log(subtotal);

let discount = calculateDiscount(subtotal);
console.log(discount);

let finalTotal = calculateFinalTotal(subtotal, discount);
console.log(finalTotal);

// Task 5
function analyzeNumber(number) {

  let positiveNegativeZero = "";
  if (number > 0) {
    positiveNegativeZero = "positive";
  } else if (number < 0) {
    positiveNegativeZero = "Negative";
  } else {
    positiveNegativeZero = "Zero";
  }


  let evenOdd = "";
  if (number % 2 === 0) {
    evenOdd = "Even";
  } else {
    evenOdd = "Odd";
  }


  let integerDecimal = "";
    if (Number.isInteger(number)) {
      integerDecimal = "Integer";
    } else {
      integerDecimal = "Decimal";
    }

  return `${positiveNegativeZero} / ${evenOdd} / ${integerDecimal}`
}
console.log(analyzeNumber(25));
console.log(analyzeNumber(-10)); 
console.log(analyzeNumber(5.5));   
console.log(analyzeNumber(0)); 

