# lambda-example
Example SAM templates to deploy AWS Lambda used by various labs / workshop (https://chatbotworkshop.com, https://sagreenlab.com, https://containersworkshop.com)

![build badge](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiOFJXc2hQVWR5R0wvbjNwbW1HdUFEQXU3c3NUekgvcXN1cTU3ajJLZHovVmFPMnZkRjdpNWV2M2I3Q0puYWdPdEpSQ0E5RFdjMEtKU3d6NG9FeVlRR0ZVPSIsIml2UGFyYW1ldGVyU3BlYyI6IjVUR2Q1c0NZaVZvSHkxMGsiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master "build badage")

## Package REST API
```shell
# change into the rest-api service
cd rest-api
```

```shell
npm run package
```

## Deploy REST API

```shell
npm run deploy
```

## Test Endpoint
https://gv0w5i9u60.execute-api.us-east-1.amazonaws.com/Prod/
