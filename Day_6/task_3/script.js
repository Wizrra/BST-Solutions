const headings = document.querySelector("h1");

const emptyState = document.querySelector("#empty-state");

const getValue = document.querySelector("#get-value");

const taskInput = document.querySelector("#task-input");

const inputUpload = document.querySelector("#input-upload");



taskInput.addEventListener("input", () => {
  let taskValue = taskInput.value;
  
  localStorage.setItem("task", taskValue);
});

getValue.textContent = localStorage.getItem("task") || [];

// let task = 




// // const headings = document.querySelector("h1");

// // const emptyState = document.querySelector("#empty-state");

// // const getValue = document.querySelector("#get-value");

// // const taskInput = document.querySelector("#task-input");

// // const inputUpload = document.querySelector("#input-upload");



// // taskInput.addEventListener("input", () => {
// //   let taskValue = taskInput.value;
  
// //   localStorage.setItem("task", taskValue);
// // });

// // getValue.textContent = localStorage.getItem("task") || [];

// // forEach(i of getValue) {

// // }
// // // let task = 


// const STORAGE_KEY_TASKS = "buildspace:tasks";
// const STORAGE_KEY_FILTER = "buildspace:filter";

// // Load initial state safely using our helper concepts
// let tasks = loadData("tasks", []);
// let currentFilter = loadData("filter", "all");

// const taskForm = document.getElementById("task-form");
// const taskInput = document.getElementById("task-input");
// const taskListEl = document.getElementById("task-list");
// const remainingCountEl = document.getElementById("remaining-count");
// const clearAllBtn = document.getElementById("clear-all-btn");
// const filterButtons = document.querySelectorAll(".filter-btn");

// // Safe load helper
// function loadData(key, fallback) {
//   try {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : fallback;
//   } catch {
//     return fallback;
//   }
// }

// // Single core function to update state, sync to storage, and re-render
// function updateTasks(newTasks, newFilter = currentFilter) {
//   tasks = newTasks;
//   currentFilter = newFilter;
  
//   localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks));
//   localStorage.setItem(STORAGE_KEY_FILTER, JSON.stringify(currentFilter));
  
//   render();
// }

// // Render function
// function render() {
//   taskListEl.innerHTML = "";

//   // Filter tasks based on selected filter option
//   const filteredTasks = tasks.filter(task => {
//     if (currentFilter === "active") return !task.completed;
//     if (currentFilter === "completed") return task.completed;
//     return true; // "all"
//   });

//   // Show empty state if list is empty
//   if (filteredTasks.length === 0) {
//     taskListEl.innerHTML = `<li class="empty-state">No tasks to display.</li>`;
//   }

//   filteredTasks.forEach(task => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
//       <button onclick="toggleTask(${task.id})">${task.completed ? 'Mark Active' : 'Complete'}</button>
//       <button onclick="deleteTask(${task.id})">Delete</button>
//     `;
//     taskListEl.appendChild(li);
//   });

//   // Update remaining count
//   const remaining = tasks.filter(t => !t.completed).length;
//   remainingCountEl.textContent = remaining;
// }

// // Action functions
// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = taskInput.value.trim();
//   if (!title) return;

//   // ENGINEERING DECISION - Unique IDs after refresh:
//   // We use Date.now() to generate a unique timestamp integer for every new task ID. 
//   // This ensures that even after a page refresh, new IDs won't clash with old ones.
//   const newTask = {
//     id: Date.now(),
//     title: title,
//     completed: false
//   };

//   updateTasks([...tasks, newTask]);
//   taskInput.value = "";
// });

// window.toggleTask = function(id) {
//   const updated = tasks.map(task => 
//     task.id === id ? { ...task, completed: !task.completed } : task
//   );
//   updateTasks(updated);
// };

// window.deleteTask = function(id) {
//   const updated = tasks.filter(task => task.id !== id);
//   updateTasks(updated);
// };

// // Filter button clicks
// filterButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const filter = btn.getAttribute("data-filter");
//     updateTasks(tasks, filter);
//   });
// });

// // Clear all data with a confirmation step
// clearAllBtn.addEventListener("click", () => {
//   const confirmed = confirm("Are you sure you want to delete all stored tasks?");
//   if (confirmed) {
//     updateTasks([], "all");
//     localStorage.removeItem(STORAGE_KEY_TASKS);
//     localStorage.removeItem(STORAGE_KEY_FILTER);
//   }
// });

// // Initial render call
// render();


