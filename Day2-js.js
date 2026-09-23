// Task 1

function weatherCalculator() {
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
  console.log(
    `The Conversion of Fahrenheit(86) to Celcius is ${Fahrenheit(86)}`,
  );
  console.log(Celcius(""));
  console.log(Fahrenheit("hello"));
}
weatherCalculator();

// Task 2

function calculateAge(currentYear, birthYear) {
  if (typeof currentYear !== "number" && typeof birthYear !== "number") {
    return "Invalid input, type in your current and birth year";
  } else if (currentYear < birthYear) {
    return "Year does not exist";
  }
  return currentYear - birthYear;
}

console.log(calculateAge(2026, 2005));
console.log(calculateAge(2026, 2030));
console.log(calculateAge("hello", "Hi"));

// Task 3
function passwordChecker(input) {
  let isLong = input.length >= 8;
  let isUpperCase = input === input.toUpperCase();
  let isLowerCase = input === input.toLowerCase();
  let isNumber = typeof input === "number";

  if (isLong || isUpperCase || isLowerCase || isNumber) {
    return "Strong";
  } else {
    return "weak";
  }
}
console.log(passwordChecker("7"));
console.log(passwordChecker("Hikmahtolu"));

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
  // let positiveNegativeZero = "";

  function positiveNegativeZero(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }

  console.log(positiveNegativeZero(25));
  console.log(positiveNegativeZero(-10));
  console.log(positiveNegativeZero(0));

  function evenOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  console.log(analyzeNumber(5.5));
  console.log(analyzeNumber(-4.2));
  console.log(analyzeNumber(100));

  function integerDecimal(number) {
    if (Number.isInteger(number)) {
      return "Integer";
    } else {
      return "Decimal";
    }
  }
  console.log(analyzeNumber(-7));
  console.log(analyzeNumber(0.8));
  console.log(analyzeNumber(2026));
  console.log(analyzeNumber(-50));
}
analyzeNumber();
