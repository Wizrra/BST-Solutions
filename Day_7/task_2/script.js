function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("Invalid user id")); 
      } else {
        resolve({ id: id, name: "User " + id }); 
      }
    }, 800);
  });
}

function getPosts(userId) {
  return wait(800).then(() => [
    { id: 1, title: "Post one by user " + userId },
    { id: 2, title: "Post two by user " + userId },
  ]);
}

console.log("Loading user...");

getUser(1)
  .then((user) => {
    console.log("Found user:", user.name);
    return getPosts(user.id); 
  })
  .then((posts) => {
    console.log("User's first post title:", posts[0].title);
  })
  .catch((error) => {
    console.log("Oopsie! Caught an error:", error.message);
  })
  .finally(() => {
    console.log("Done loading! Hide the spinner message either way.");
  });


getUser(0)
  .then((user) => console.log(user))
  .catch((err) => console.log("Caught expected error for ID 0:", err.message));


console.time("Promise.all time");
Promise.all([getUser(1), getUser(2), getUser(3)])
  .then((users) => {
    console.log("Loaded all 3 users at once:", users);
    console.timeEnd("Promise.all time"); 
  })
  .catch((err) => console.log("One failed:", err));


function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 99) {
        reject(new Error("Product not found in inventory!"));
      } else {
        resolve({ id: id, title: "Super Toy #" + id, price: 5000 });
      }
    }, 600);
  });
}

getProduct(99).catch(err => console.log("Product test result:", err.message));