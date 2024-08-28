const text = `{
  "hello": "world",
  "numbers": [1, 2, 3]
}`;
  console.log("text: ", text);
const data = JSON.parse(text);
  console.log("data: ", data);
const dataString = JSON.stringify(data);
  console.log("dataString: ", dataString);
const obj = {
  "hello": "world",
  "numbers": [1, 2, 3]
};
  console.log("obj: ", obj);
const json = JSON.stringify(obj);
  console.log("json: ", json);
const overStringify = JSON.stringify(json);
  console.log("overStringify: ", overStringify);
const doubleOverStringify = JSON.stringify(overStringify);
  console.log("doubleOverStringify: ", doubleOverStringify);
const tripleOverStringify = JSON.stringify(doubleOverStringify);
  console.log("tripleOverStringify: ", tripleOverStringify);
const parsed = JSON.parse(json);
  console.log("parsed: ", parsed);
const parsedOverStringify = JSON.parse(tripleOverStringify);
  console.log("parsedOverStringify: ", parsedOverStringify);
const doubleParsedOverStringify = JSON.parse(parsedOverStringify);
  console.log("doubleParsedOverStringify: ", doubleParsedOverStringify);
const tripleParsedOverStringify = JSON.parse(doubleParsedOverStringify);
  console.log("tripleParsedOverStringify: ", tripleParsedOverStringify); //won't let you do this! [object Object] is not valid JSON
