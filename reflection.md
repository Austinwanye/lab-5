What did you ask Codex to build?

I asked Codex to build a simple TypeScript hello world program that runs with Bun.

What file or files did Codex create?

Codex created `index.ts` and `package.json`.

What Bun command did you use to run the program?

I used `bun run index.ts`.

Did Codex get it right the first time?

Mostly, but I asked Codex to change the wording and use my name.

What did you have to change, fix, or ask again?

I asked Codex to change the welcome message, greeting, and name so the program matched the example better.

What extra feature did you add?

I added a question that asks for the user's favorite programming language and responds to it.

For stretch credit, I changed the program so it keeps asking for names until the user types `quit`. I also made it check for blank names. If the user just presses Enter, the program prints a friendly message and asks again instead of greeting an empty name.

Codex helped me debug by running the program in the terminal with test input. I tested a blank name, a real name, a favorite programming language, and `quit` to make sure both stretch features worked.

What part of the TypeScript code do you understand best?

I understand the `console.log()` lines best because they print messages to the terminal.

What part still feels confusing?

The `prompt()` line with `?.trim() || "Austin"` still feels a little confusing because it handles empty answers and fallback values.
