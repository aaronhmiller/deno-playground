import Person, { sayHello } from "./person.ts";

const ada: Person = {
  lastName: "Lovelace",
  firstName: "Ada",
};

const result = sayHello(`${JSON.parse(ada)}`);

console.log( { result } );
