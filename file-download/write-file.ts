const data = [
  ["name", "age"],
  ["Alice", "24"],
  ["Bob", "30"],
];

await Deno.writeTextFile("data.csv", data);
