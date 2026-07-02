console.log("Welcome to AI Applications!");

while (true) {
  const name = prompt("What is your name? Type quit to stop.")?.trim() || "";

  if (name.toLowerCase() === "quit") {
    console.log("Goodbye!");
    break;
  }

  if (name === "") {
    console.log("Please enter a name so I can greet you.");
    continue;
  }

  console.log(`Hello, ${name}! It's great to meet you.`);

  const favoriteLanguage = prompt("What is your favorite programming language?")?.trim() || "TypeScript";

  console.log(`${favoriteLanguage} is a great choice, ${name}!`);
}
