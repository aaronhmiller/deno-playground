import {
  DeleteObjectCommand,
  S3Client,
} from "https://deno.land/x/aws_sdk/client-s3/mod.ts";
import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

// Configure AWS S3 Client
const s3Client = new S3Client({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

async function deleteFile(bucketName: string, objectKey: string) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
    });

    const response = await s3Client.send(command);
    console.log("Delete successful:", response);
  } catch (error) {
    console.error("Error deleting file:", error);
    if (error.message.includes("Cannot read properties of null")) {
      console.warn(
        "This error can be ignored if the file was deleted successfully.",
      );
    }
  }
}

// Usage
await deleteFile("aaron-slack-uploads", "data.csv");
