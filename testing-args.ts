// You can get the list of command line arguments from `Deno.args`.
var name = Deno.args[0];
const food = Deno.args[1];

if (Deno.args[0] === null) {
  name = "noname";
}

console.log(`Hello ${name}, I like ${food}!`);

