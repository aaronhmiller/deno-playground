import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://example.com");

const title = await page.title();
console.log("Page Title:", title);

await browser.close();

