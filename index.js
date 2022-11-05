const aws = require('aws-sdk');

exports.handler = async (event) => {
  try{
      
      console.log('event: ', event);
      
      // event has propety called "Records"
      const { Records } = event;
      
      // parse the message into json object:
      const body = JSON.parse(Records[0].body); 
      
      // logs the body which is message
      console.log("Incoming message body from SQS :", body); 
          
       /// start sending email:
     var ses = new aws.SES({ region: "us-east-1" });
     var params = {
        Destination: {
            ToAddresses: ["to_email_address"],
        },
        Message: {
            Body: {
            Text: { Data : Records[0].body } , // Data should be string
            },
    
            Subject: { Data: "Test Email" },
        },
        Source: "email_address_verified_in_ses",
        };
        
        var result = ses.sendEmail(params).promise()
        console.log(result)
        return {"statusCode": 200, "message:": "success"};
     
  } catch(error){     
      console.error('Error in executing lambda: ', error);
      return {"statusCode": 500, "message:": "Error while execution"};
  }
};
