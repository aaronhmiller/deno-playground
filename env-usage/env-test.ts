import { load } from 'https://deno.land/std@0.212.0/dotenv/mod.ts'

const env = await load();

const port = env.PORT;
console.log(port);
