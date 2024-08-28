const input = "https://app.ox.security/pipeline-issues?filters=%7B%22jobNumber%22%3A%5B%2225276615804%22%5D%7D";

const decoded = decodeURIComponent(input);
const url = new URL(decoded);
const params = new URL(decoded).searchParams;
const job = JSON.parse(params.get("filters"))
console.log(job.jobNumber[0]);
