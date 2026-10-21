const tasks = [{id: 1, title: "Learn JSON", completed: false}];

let check = JSON.stringify(tasks);

let pass = JSON.parse(check);

// console.log(check);
// console.log(pass[0].completed);

// let check = JSON.parse(tasks);

localStorage.setItem("check", pass);


function saveData(key, value) {
  try {
    const jsonString = JSON.stringify(value);
    localStorage.setItem(key, jsonString);
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
}


function loadData(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    
   
    if (item === null) {
      return fallback;
    }
    
    
    return JSON.parse(item);
  } catch (error) {
    console.warn("Corrupted data found in storage. Returning fallback.", error);
    return fallback; 
  }
}

saveData("myString", "Hello BuildSpace");
saveData("myNumber", 42);
saveData("myObj", { theme: "dark", notifications: true });
saveData("myTasksArray", [
  { id: 1, title: "Learn JSON", completed: false },
  { id: 2, title: "Build APIs", completed: true }
]);

console.log("Loaded String:", loadData("myString"));
console.log("Loaded Number:", loadData("myNumber"));
console.log("Loaded Object:", loadData("myObj"));
console.log("Loaded Array:", loadData("myTasksArray"));