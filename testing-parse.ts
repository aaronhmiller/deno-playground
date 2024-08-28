const input = "https://app.ox.security/pipeline-summary?filters=%7B%22jobId%22%3A%5B%221314682499%22%5D%7D";
const input2 = "https://app.ox.security/pipeline-issues?filters=%7B%22jobNumber%22%3A%5B%227028661972%22%5D%7D";
const input3 = "https://app.ox.security/pipeline-issues?filters=%7B%22jobNumber%22%3A%5B%22%7B82178e97-e13a-5afb-8ce2-d6d056cc7480%7D%22%5D%7D"
const input4 = "https://app.ox.security/pipeline-issues?filters=%7B%22jobNumber%22%3A%5B%22%7B7093f9ab-2804-5ef6-97c7-a15f87255901%7D%22%5D%7D";

  const decoded = decodeURIComponent(input4);
console.log(decoded);
  const params = new URL(decoded).searchParams;
console.log(params);
  const job = JSON.parse(params.get("filters"));
  console.log(JSON.stringify(job));
  if (decoded.includes("summary")) {
    console.log(job.jobId[0]);
  } else if (decoded.includes("issues")) {
    if (job.jobNumber[0].includes("{")) {
      console.log((job.jobNumber[0]).slice(1, -1));
    } else {
    console.log(job.jobNumber[0]);
    }
  } else {
    console.log("error parsing input");
  }
