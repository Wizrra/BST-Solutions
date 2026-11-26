const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const errorTextEl = document.getElementById("error-text");
const emptyEl = document.getElementById("empty");
const listEl = document.getElementById("posts-list");
const retryBtn = document.getElementById("retry-btn");
const reloadBtn = document.getElementById("reload-btn");
const filterInput = document.getElementById("filter-input");

let status = "loading";
let items = [];
let errorMessage = "";


function toItem(post) {
  return {
    id: post.id,
    title: post.title
  };
}

function render() {
  loadingEl.hidden = status !== "loading";
  errorEl.hidden = status !== "error";
  emptyEl.hidden = status !== "empty";
  listEl.hidden = status !== "success";
  retryBtn.disabled = status === "loading";

  if (status === "error") {
    errorTextEl.textContent = errorMessage;
  }

  if (status === "success") {
    listEl.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
     
      li.textContent = item.title;
      listEl.appendChild(li);
    });
  }
}

async function loadPosts() {
  status = "loading";
  errorMessage = "";
  render();

  try {
    const response = await fetch("https://dev.to/api/articles?per_page=30");
    if (!response.ok) {
      throw new Error("Could not load posts (HTTP " + response.status + ").");
    }

    const data = await response.json();
    const search = filterInput.value.trim().toLowerCase();
    const filtered = data
      .map(toItem)
      .filter((item) => item.title.toLowerCase().includes(search));

    if (filtered.length === 0) {
      status = "empty";
      items = [];
    } else {
      status = "success";
      items = filtered.slice(0, 10);
    }
  } catch (err) {
    status = "error";
    items = [];
    errorMessage = navigator.onLine
      ? "Something went wrong loading posts. Please try again."
      : "You appear to be offline. Check your connection and try again.";
  }

  render();
}

retryBtn.addEventListener("click", loadPosts);
reloadBtn.addEventListener("click", loadPosts);
loadPosts();