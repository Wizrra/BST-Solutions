const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const errorTextEl = document.getElementById("error-text");
const emptyEl = document.getElementById("empty");
const listEl = document.getElementById("posts-list");
const retryBtn = document.getElementById("retry-btn");
const reloadBtn = document.getElementById("reload-btn");
const filterInput = document.getElementById("filter-input");

let loadingState = "loading";
let items = [];
let allItems = [];
let errorMessage = "";


function toItem(post) {
  return {
    id: post.id,
    title: post.title
  };
}

function applyFilter() {
  const search = filterInput.value.trim().toLowerCase();
  items = allItems
    .filter((item) => item.title.toLowerCase().includes(search))
    .slice(0, 10);

  loadingState = items.length === 0 ? "empty" : "success";
  render();
}

function render() {
  loadingEl.hidden = loadingState !== "loading";
  errorEl.hidden = loadingState !== "error";
  emptyEl.hidden = loadingState !== "empty";
  listEl.hidden = loadingState !== "success";
  retryBtn.disabled = loadingState === "loading";

  if (loadingState === "error") {
    errorTextEl.textContent = errorMessage;
  }

  if (loadingState === "success") {
    listEl.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
     
      li.textContent = item.title;
      listEl.appendChild(li);
    });
  }
}

async function loadPosts() {
  loadingState = "loading";
  errorMessage = "";
  render();

  try {
    const response = await fetch("https://dev.to/api/articles?per_page=30");
    if (!response.ok) {
      throw new Error("Could not load posts (HTTP " + response.status + ").");
    }

    const data = await response.json();
    allItems = data.map(toItem);
    applyFilter();
  } catch (error) {
    loadingState = "error";
    items = [];
    allItems = [];

    if (!navigator.onLine) {
      errorMessage = "You appear to be offline. Check your connection and try again.";
    } else if (error instanceof Error && error.message.startsWith("Could not load posts")) {
      errorMessage = error.message;
    } else {
      errorMessage = "Something went wrong loading posts. Please try again.";
    }
  }

  render();
}

retryBtn.addEventListener("click", loadPosts);
reloadBtn.addEventListener("click", loadPosts);
filterInput.addEventListener("input", applyFilter);
loadPosts();