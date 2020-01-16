'use strict';
const AWS = require('aws-sdk');

module.exports.hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Im neither happy nor sad',
        input: event,
      })
  };
  callback(null, response);
};
