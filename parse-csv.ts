// Import necessary modules
import { readTextFile } from "https://deno.land/std/fs/mod.ts";
import { parse } from "https://deno.land/std/csv/mod.ts";

// Function to read orgIds from a CSV file
async function readOrgIdsFromFile(filePath: string): Promise<string[]> {
  try {
    const data = await Deno.readTextFile(filePath);
    const parsedCsv = await parse(data, { header: true});
    // Flatten the array if necessary and ensure it's a string array
    const orgIds: string[] = parsedCsv.flat().map((id: string) => id.trim());
    return orgIds;
  } catch (error) {
    console.error("Error reading or parsing the CSV file:", error);
    throw error;
  }
}

const orgIds = await readOrgIdsFromFile("./orgIds.csv");
console.log(orgIds);
