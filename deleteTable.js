var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "NodeJsBaseballStats"
};

dynamodb.deleteTable(params, function(err, data) {
    if (err) {
        console.error("Unable to delete NodeJsBaseballStats. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. NodeJsBaseballStats description JSON:", JSON.stringify(data, null, 2));
    }
});