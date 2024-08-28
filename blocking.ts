const array = `{
    "data": {
        "getCICDIssues": {
            "issues": [
                {
                    "issueId": "f9fb5bb4-8a08-4ed6-b314-47abc0b8710f-754924446-oxPolicy_securityScan_55-CKV2_K8S_6-false",
                    "cicdFields": {
                        "enforcement": "Monitor"
                    }
                },
                {
                    "issueId": "f9fb5bb4-8a08-4ed6-b314-47abc0b8710f-754924446-oxPolicy_securityScan_55-CKV_K8S_16-false",
                    "cicdFields": {
                        "enforcement": "Block"
                    }
                },
                {
                    "issueId": "g8fb5bb4-8a08-4ed6-b314-47abc0b8710f-754924446-oxPolicy_securityScan_55-CKV_K8S_16-false",
                    "cicdFields": {
                        "enforcement": "Block"
                    }
                }
            ]
        }
    }
}`

const json = JSON.parse(array);
const issues = json.data.getCICDIssues.issues;
console.log(issues);
const blockingIssues = new Array();
for (let i = 0; i < issues.length; i++) {
  if (issues[i].cicdFields.enforcement === "Block") {
    blockingIssues.push(issues[i].issueId);
  }
}
console.log(blockingIssues);
