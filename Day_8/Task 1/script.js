// Task 1

async function getPosts() {
  // 1. Fetch directly with the URL inside fetch()
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("Status:", response.status);
  console.log("OK:", response.ok);
  console.log("Headers:", response.headers);

  // 2. Second await to read the JSON body
  const posts = await response.json();
  console.log("Posts:", posts);
}

getPosts();

// Testing an ID that does not exist (404)
async function getMissingPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/999999");
  console.log("Missing post status:", response.status); // 404
  console.log("Did fetch throw? No, response.ok is:", response.ok); // false
}

getMissingPost();





