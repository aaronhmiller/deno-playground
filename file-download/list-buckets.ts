import { S3 } from "https://deno.land/x/aws_sdk/client-s3/mod.ts";
import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

const s3 = new S3({
  region: "us-west-2",
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

// Call S3 to list the buckets
const { Buckets = [] } = await s3.listBuckets({});
Buckets.forEach((bucket) => console.log(bucket.Name));
