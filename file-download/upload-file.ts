import {
  PutObjectCommand,
  S3Client,
} from "https://deno.land/x/aws_sdk/client-s3/mod.ts";
import { load } from "https://deno.land/std/dotenv/mod.ts";
import { basename } from "https://deno.land/std/path/mod.ts";

const env = await load();

// Configure AWS S3 Client
const s3Client = new S3Client({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFile(filePath: string, bucketName: string) {
  try {
    const fileContent = await Deno.readTextFile(filePath);

    const fileName = basename(filePath);

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent,
    });

    const response = await s3Client.send(command);
    console.log("Upload successful:", response);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

// Usage
await uploadFile("./data.csv", "aaron-slack-uploads");
