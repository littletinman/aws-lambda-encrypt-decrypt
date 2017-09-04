'use strict';

exports.handler = function(event, ctx, callback) {

    const key = event.body.key;
    const message = event.body.message;
    const encryptor = require('simple-encryptor')(key);

    var encrypted = encryptor.encrypt(message);

    callback(null, { statusCode: 200, body: encrypted }); // Responding with status code helps some httpResponse handlers understand the call was successful
};