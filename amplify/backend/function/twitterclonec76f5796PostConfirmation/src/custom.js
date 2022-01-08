const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tableName = "User-s44rurqpe5c25f5ccaul5smkgi-dev";

exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger

  if (!event?.request?.userAttributes?.sub) {
    console.log("No sub provided");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    __typename: { S: "User" },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: "1" },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
    email: { S: event.request.userAttributes.name },
  };

  const params = {
    Item: userItem,
    TableName: tableName,
  };

  // save a new user to DynamoDB
  try {
    await ddb.putItem(params).promise();
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};
