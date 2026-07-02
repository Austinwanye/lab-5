console.log("Welcome to AI Applications!");

const name = prompt("What is your name?")?.trim() || "Austin";

console.log(`Hello, ${name}! It's great to meet you.`);

const favoriteLanguage = prompt("What is your favorite programming language?")?.trim() || "TypeScript";

console.log(`${favoriteLanguage} is a great choice, ${name}!`);
