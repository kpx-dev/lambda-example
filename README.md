# lambda-example
Example SAM templates to deploy AWS Lambda used by various labs / workshop (https://chatbotworkshop.com, https://sagreenlab.com, https://containersworkshop.com)

## Package

```shell
sam package --s3-bucket your-unique-S3-bucket-name --s3-prefix lab --output-template-file template_packaged.yaml
```

## Deploy

```shell
sam deploy --template-file template_packaged.yaml --stack-name workshop-rest-api-lambda --capabilities CAPABILITY_IAM
```
