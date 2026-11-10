function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) reject(new Error("Invalid user id"));
      else resolve({ id: id, name: "User " + id });
    }, 800);
  });
}

async function showUserProfile(id) {
  console.log("Showing loading spinner...");
  try {
    const user = await getUser(id);
    console.log("Got user via async/await:", user.name);
  } catch (error) {
    console.log("An error happened:", error.message);
  } finally {
    console.log("Hide loading spinner.");
  }
}

showUserProfile(1);

async function compareSpeeds() {
  console.log("--- Starting Sequential Test ---");
  console.time("Sequential Time");
  
  const u1 = await getUser(1);
  const u2 = await getUser(2); 
  const u3 = await getUser(3); 
  
  console.timeEnd("Sequential Time");

  console.log("--- Starting Parallel Test ---");
  console.time("Parallel Time");
  

  const users = await Promise.all([getUser(1), getUser(2), getUser(3)]); 
  
  console.timeEnd("Parallel Time"); 
}

compareSpeeds();


function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Operation timed out!")), ms);
  });
  

  return Promise.race([promise, timeoutPromise]);
}

withTimeout(getUser(1), 300)
  .then(user => console.log(user))
  .catch(err => console.log("Timeout test caught:", err.message));


async function retry(fn, times) {
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      return await fn(); 
    } catch (error) {
      console.warn(`Attempt ${attempt} failed. Retrying...`);
      if (attempt === times) throw error; 
    }
  }
}