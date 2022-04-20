'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1" });

exports.handler = async(event, context, callback) => {

    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
    var documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

    const tableSource = "Activity-jec7czqz5bgejojxv4clferjt4-dev";
    const tableDestination = "Jobs-jec7czqz5bgejojxv4clferjt4-dev";

    let params;
    let paramsSource;
    let change = '';
    let jobId = '';

    event.Records.forEach((record) => {
        console.log('Stream record: ', JSON.stringify(record, null, 2));

        if (record.eventName == 'INSERT') {
            console.log('Stream record: INSERTING NEW RECORD ', record.NewImage);
            change = 'INSERT';
            params = {};
            const newImages = event.Records.map(
                (record) => AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
            );
            console.log('the job ID is: ', jobId);
            params = {
                TableName: tableDestination,
                Item: {
                    __typename: 'Job',
                    jobname: newImages[0].name,
                    jobdescription: 'Anything descriptions for now .... ',
                    owneId: newImages[0].activityUserId,
                    jobreported: newImages[0].reported,
                    jobcompleted: newImages[0].completed,
                    jobeventId: newImages[0].eventId,
                    jobeventTitle: newImages[0].eventTitle,
                    jobpostId: newImages[0].id,
                    jobposttitle: 'Anything2',
                    user: newImages[0].user,
                    id: 'job-' + newImages[0].id
                }
            }

        } else if (record.eventName == 'MODIFY') {
            console.log('Stream record: MODIFYING A RECORD ');
            change = 'MODIFY';
            params = {};
            const newImages = event.Records.map(
                (record) => AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage)
            );
            const oldImages = event.Records.map(
                (record) => AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage)
            );
            console.log('THIS IS THE MODIFIED IMAGE: ======== NewImage: ', newImages[0]);
            console.log('THIS IS THE MODIFIED IMAGE: ======== OldImage: ', oldImages[0]);

            params = {
                TableName: tableDestination,
                Key: { id: 'job-' + oldImages[0].id },
                Item: {
                    __typename: 'Job',
                    status: 'MODIFIED',
                    jobname: newImages[0].name,
                    jobdescription: 'Anything descriptions for now .... ',
                    owneId: newImages[0].activityUserId,
                    jobreported: newImages[0].reported,
                    jobcompleted: newImages[0].completed,
                    jobeventId: newImages[0].eventId,
                    jobeventTitle: newImages[0].eventTitle,
                    jobpostId: newImages[0].id,
                    jobposttitle: 'Anything2',
                    user: newImages[0].user
                }
            }
        } else {
            console.log('Stream record: DELETING A RECORD ');
        }
    });

    try {
        if (change == 'INSERT') {
            const data = await documentClient.put(params).promise();
            console.log('THIS DATA WAS ADDED TO JOBS TABLE: ', data);
        } else if (change == 'MODIFY') {
            const data = await documentClient.update(params).promise();
            console.log('CHANGE DATA TO THE FOLLOWING IN JOBS TABLE: ', params);
        } else {
            console.log('the user is trying to delete this records ==============: ')
        }
    } catch (err) {
        console.log(err);
    }
}