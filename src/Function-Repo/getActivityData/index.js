'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1" });

exports.handler = async(event, context) => {

    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

    const params = {
        TableName: "Activity-jec7czqz5bgejojxv4clferjt4-dev",
        Key: {
            id: "10222c5e-fe59-4267-bde2-3868fc7e8ab5"
        }
    }

    try {
        const data = await documentClient.get(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}