# AWS_SQS_LAMBDA_SES

You can use below policy attached to the lambda role or add FULL SES permission.
# Role to access SES
```
{
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "ses:SendEmail",
                  "ses:SendRawEmail"
              ],
              "Resource": "*"
          }
      ]
  }
```
