'use strict';

exports.handler = function(event, ctx, callback) {

    const key = event.body.key;
    const message = event.body.message;
    const decryptor = require('simple-encryptor')(key);

    var decrypted = decryptor.decrypt(message);

    callback(null, { statusCode: 200, body: decrypted });
};