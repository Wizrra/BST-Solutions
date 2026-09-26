// TAsk 1
const language = [
  "Javascript",
  "Python",
  "Java",
  "C#",
  "Go",
  "PHP",
  "Ruby",
  "Typescript",
];
// Print the first Item
let check = language.shift();
console.log(check);
// Print the last item
check = language.pop();
console.log(check);
// Print at index 3
check = language[3];
console.log(check);
// print length
check = language.length;
console.log(check);
// change one language
language[2] = "Django";
console.log(language);
// Add New language
language.unshift("C++");
console.log(language);
// Remove one language
language.pop();
console.log(language);

// Task 2
// const scores = [78, 92, 65, 88, 54, 71, 96, 83]

function analyzeScore(scores) {
  // Total score
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  console.log(total);

  // Average score
  let average = total / 8;
  console.log(average);

  // Highest score
  let highest = scores[0];

  for (let score of scores) {
    if (score > highest) {
      highest = score;
    }
  }
  console.log(highest);

  // Lowest score
  let lowest = scores[0];

  for (let score of scores) {
    if (score < lowest) {
      lowest = score;
    }
  }
  console.log(lowest);

  // How many students passed
  let count = 0;
  for (let score of scores) {
    if (score >= 60) {
      count++;
    }
  }
  console.log(count);

  // How many failed
  count = 0;
  for (let score of scores) {
    if (score < 60) {
      count++;
    }
  }
  console.log(count);
}
console.log(analyzeScore((scores = [78, 92, 65, 88, 54, 71, 96, 83])));

// Task 3
const cart = [
  { name: "Mirror", price: 1200, quantity: 1 },
  { name: "Mouse", price: 2500, quantity: 1 },
  { name: "laptop stand", price: 10000, quantity: 2 },
  { name: "Keybord", price: 5000, quantity: 1 },
  { name: "Airpod", price: 10000, quantity: 3 },
];

// Calculate the t=number of products
const length = cart.length;
console.log(length);

// Calculate the total cart value
let subTotal = 0;
let total = 0;

for (let product of cart) {
  subTotal += product.price;
  total += product.price * product.quantity;
}

console.log(subTotal);
console.log(total);

// Most expensice and cheapest
let mostExpensive = cart[0];
let cheapest = cart[0];

for (let product of cart) {
  if (product.price > mostExpensive.price) {
    mostExpensive = product;
  }
  if (product.price < cheapest.price) {
    cheapest = product;
  }
}

console.log(mostExpensive.name, mostExpensive.price);
console.log(cheapest.name, cheapest.price);

// Task 4
const users = [
  { name: "Hikmah", email: "hikmah@gmail.com", role: "admin" },
  { name: "Tolu", email: "Tolu@gmail.com", role: "developer" },
  { name: "Christaina", email: "Christ@gmail.com", role: "frontender" },
  { name: "Sokunbi", email: "sokunbi@gmail.com", role: "Backender" },
  { name: "Wizrra", email: "Asake@gmail.com", role: "Full-stack" },
  { name: "Susan", email: "susan@gmail.com", role: "admin" },
];

// Find user by email
function findUserEmail(email) {
  const findEmail = users.find(
    (user) => user.email.toLowerCase === email.toLowerCase,
  );
  return findEmail ? findEmail : null;
}
console.log(findUserEmail("Hikmah@gmail.com"));

// Find all admins
function allAdmins(role) {
  const findAdmin = users.filter((user) => user.role === "admin");
  return findAdmin ? findAdmin : null;
}
console.log(allAdmins("admin"));

// Whether a user exists
function checkName(name) {
  let searchName = users.some(
    (user) => user.name.toLowerCase() === name.toLowerCase(),
  );
  return searchName ? searchName : "User Does not exist";
}
console.log(checkName("susan"));

// Find users by role
function checkRole(role) {
  let searchRole = users.filter(
    (user) => user.role.toLowerCase() === role.toLowerCase(),
  );
  return searchRole ? searchRole : "Role does not exist";
}
console.log(checkRole("frontender"));

// Task 5
// const prices = [1000, 2500, 5000, 7500, 10000];

function discountPrice(prices) {
  prices.map((price) => {
    let discount = price * 0.1;
    let lastPrice = price - discount;
    console.log(lastPrice);
    // return lastPrice;
  });

  // Prices above 5000 (first method I used before i saw the instruction below to use filter)
  let abovePrice = [];
  for (let price of prices) {
    if (price > 5000) {
      abovePrice.push(price);
    }
  }
  console.log(abovePrice);

  // Using filter for Prices above
  let abovePrices = prices.filter(price => price > 5000);
  console.log(abovePrices);

  // Prices below 5000 (first method I used before i saw the instruction below to use filter)
  let belowPrice = [];
  for (let price of prices) {
    if (price < 5000) {
      belowPrice.push(price);
    }
  }
  console.log(belowPrice);

  // Using filter for Prices below
  let belowPrices = prices.filter(price => price < 5000);
  console.log(belowPrices);

  // Sort the prices
  let arrangPrices = prices.sort(function(a, b) {return a - b});
  console.log(arrangPrices);
  
}
console.log(discountPrice((prices = [1000, 2500, 5000, 7500, 10000])));

// .map() helps to loop through the arrays one after the other to get the desired result. I used to make it easier
// .filter() helps to infilterate and choose the above and below prices amongst the others. Tho, I didn't intend using it at first untill i got the instruction
// .sort helps to sort them out accordingly and hierachically.

// Engineering Approach
// I didn't see this before working on the above and below price.
// I did it because that was the best solution I could think of at the time before seeing your instruction to use .filter() method as an approach to sove it.