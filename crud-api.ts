const site = await fetch("https://api.demojoyto.win");
const data = site.clone();

console.log("json: ", await site.json());
console.log("text: ", await data.text());

const users = await fetch("https://api.demojoyto.win/users");
const usersJson = await users.json();
console.log("json: ", usersJson);
const usersJsonString = JSON.stringify(usersJson);
console.log("jsonString: ", usersJsonString);
const usersJsonString2 = JSON.stringify(usersJson,null,2);
console.log("jsonString2: ", usersJsonString2);
const doubleJsonString = JSON.stringify(usersJsonString);
console.log("doubleJsonString: ", doubleJsonString);
