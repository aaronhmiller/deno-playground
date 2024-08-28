import { decode } from "https://deno.land/x/djwt@v2.7/mod.ts";

// Prompt for the JWT token
const token = prompt("Please enter your token:");

// Decode the token to get the payload
const [header, payload, signature] = decode(token);

// Ensure the token is properly decoded and contains the exp field
if (typeof payload === "object" && "exp" in payload) {
  const exp = payload.exp as number;

  //debugging
  console.log("exp value: ", exp);

  // Get the current time in seconds
  const now = Math.floor(Date.now() / 1000);

  // Check if the token has expired
  if (exp < now) {
    console.log("Token has expired");
  } else {
    console.log("Token is still valid");
  }
} else {
  console.log("Invalid token or missing exp field. payload value:", payload);
}

