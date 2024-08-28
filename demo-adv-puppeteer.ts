import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to Google
  await page.goto("https://www.duckduckgo.com");

  // Wait for the search box to appear and extend the timeout
  await page.waitForSelector('input[name="q"]', { timeout: 60000 });

  // Type a query into the search box
  await page.type('input[name="q"]', "Deno Puppeteer", { delay: 100 });

  // Submit the form
  await page.keyboard.press("Enter");

  // Wait for the results page to load and display the results.
  await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('article');



  // Extract the titles and URLs of the first few search results
  const results = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('article')); // Adjust this selector as needed

    return items.map(item => {
      // Get all <a> tags within the item, and filter out those that don't have an href or are not desired
      const allLinks = Array.from(item.querySelectorAll('a'));
    
      // Assuming you want the last or specific <a> tag, we can filter or choose based on your requirement
      const correctLink = allLinks.find(link => link.href && !link.closest('span')) || allLinks[allLinks.length - 1];
    
      return {
        title: item.textContent || '',
        url: correctLink?.href || ''
      };
    });
  });

  console.log(results);

  // Save the results to a file
  await Deno.writeTextFile("search_results.json", JSON.stringify(results, null, 2));

//  await browser.close();
}

run();

