import {
  S3Client,
  GetObjectCommand,
} from 'https://deno.land/x/aws_sdk/client-s3/mod.ts';
import { load } from 'https://deno.land/std/dotenv/mod.ts';
import { getSignedUrl } from 'https://deno.land/x/aws_sdk/s3-request-presigner/mod.ts';

const env = await load();

// Configure AWS S3 Client
const s3Client = new S3Client({
  region: env.AWS_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
});

async function getDownloadUrl(bucketName: string, objectKey: string, expiresInSeconds: number = 3600) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: expiresInSeconds });
    console.log('Download URL:', url);
    return url;
  } catch (error) {
    console.error('Error generating download URL:', error);
  }
}

// Usage
await getDownloadUrl('aaron-slack-uploads', 'data.csv');

