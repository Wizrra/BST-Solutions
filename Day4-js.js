// Task 1
const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 12000,
  category: "Accessories",
  inStock: true,
};

function formatProduct({ name, price, inStock }) {
  let formatPrice = price.toLocaleString();
  let formatStock = inStock ? "In Stock" : "Not in Stock";

  return `${name} -- NGN ${formatPrice} (${formatStock})`;
}
console.log(formatProduct(product));

// Task 2
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 12000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 20000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 10000,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Battery",
    price: 40000,
    category: "Automobile",
    inStock: true,
  },
  {
    id: 5,
    name: "Solar",
    price: 500000,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 6,
    name: "Bulb",
    price: 1500,
    category: "Electronics",
    inStock: false,
  },
];

// Task 3
function getInStockProducts(products) {
  let inStockProducts = products.filter((p) => p.inStock === true);

  return inStockProducts;
}
console.log(getInStockProducts(products));

function getProductNames(products) {
  let productNames = products.map((p) => p.name);

  return productNames;
}
console.log(getProductNames(products));

function findProductById(products, id) {
  let productById = products.find((p) => p.id === id);

  return productById;
}
console.log(findProductById(products, 2));

function getTotalCatalogValue(products) {
  // let add = 0;
  let getPrices = products.reduce((add, p) => add + p.price, 0);
  let formatPrices = getPrices.toLocaleString();

  return formatPrices;
}
console.log(getTotalCatalogValue(products));

// function groupByCategory(products) {
//   let productByCategory = products.filter(p => {
//     if (p.category.toLowerCase() === "accessories") {
//       return products;
//     }
//   })
//   return productByCategory;
// }
// console.log(groupByCategory(products));

// function groupByCategory(products) {
//   let productByCategory = products.reduce((acc, product) => {
//     let group = product.category;

//     if (group === "")
//   })
//   return productByCategory;
// }
// console.log(groupByCategory(products));

// Task 4
const students = [
  {
    id: 1,
    name: "Shola",
    score: 86,
    subjects: "Mathematitics",
  },
  {
    id: 2,
    name: "Richard",
    score: 50,
    subjects: "English",
  },
  {
    id: 3,
    name: "Remi",
    score: 78,
    subjects: "Mathematitics",
  },
  {
    id: 4,
    name: "Ambrose",
    score: 67,
    subjects: "Mathematitics",
  },
  {
    id: 5,
    name: "Mary",
    score: 89,
    subjects: "English",
  },
  {
    id: 6,
    name: "Ade",
    score: 40,
    subjects: "Mathematitics",
  },
];

function getPassingStudents(students, passMarks) {
  let higherThanPassMark = students.filter((s) => s.score >= passMarks);
  return higherThanPassMark;
}
console.log(getPassingStudents(students, 70));
console.log(getPassingStudents(students, 55));

function getAverageScore(students) {
  let totalScore = students.reduce((add, s) => add + s.score, 0);
  let averageScore = totalScore / students.length;

  return averageScore;
}
console.log(getAverageScore(students));

function getTopStudents(students) {
  let topScore = students.reduce((top, s) => {
   return s.score > top.score ? s : top;
  });
  return topScore;
}
console.log(getTopStudents(students));

function assignGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  if (score >= 40) return "E";
  return "F"
}

function attachGrades(students) {
  return students.map(s => ({
    ...s, 
    grade: assignGrade(s.score)
  }))
}
let gradedStudents = attachGrades(students);
console.log(gradedStudents);


// Task 5

const transactions = [
  { id: 1, type: "credit", amount: 150000, date: "2026-01-10" },
  { id: 2, type: "debit",  amount: 25000,  date: "2026-01-15" },
  { id: 3, type: "debit",  amount: 12000,  date: "2026-01-20" },
  { id: 4, type: "credit", amount: 80000,   date: "2026-02-05" },
  { id: 5, type: "debit",  amount: 45000,  date: "2026-02-12" },
  { id: 6, type: "debit",  amount: 5000,   date: "2026-02-18" },
  { id: 7, type: "credit", amount: 200000, date: "2026-03-01" },
  { id: 8, type: "debit",  amount: 30000,  date: "2026-03-10" },
  { id: 9, type: "debit",  amount: 15000,  date: "2026-03-22" },
  { id: 10, type: "credit", amount: 50000,  date: "2026-03-28" }
];

function getBalance(transactions) {
  return transactions.reduce((acc, t) => {
    if (t.type === "credit") {
      return acc + t.amount;
    } else {
      return acc - t.amount;
    }
  }, 0);
}
console.log("Final Balance:", getBalance(transactions));

function getTransactionsByType(transactions, type) {
  return transactions.filter(t => t.type === type);
}
console.log("Credit Transactions:", getTransactionsByType(transactions, "credit"));

function getMonthlyTotals(transactions) {
  return transactions.reduce((totals, t) => {
    // Extract "YYYY-MM" from "YYYY-MM-DD" using .slice(0, 7)
    const month = t.date.slice(0, 7);

    // If month doesn't exist on the object yet, initialize it at 0
    if (!totals[month]) {
      totals[month] = 0;
    }

    // Add amount for credits, subtract for debits (net balance per month)
    if (t.type === "credit") {
      totals[month] += t.amount;
    } else {
      totals[month] -= t.amount;
    }

    return totals;
  }, {});
}
console.log("Monthly Totals:", getMonthlyTotals(transactions));