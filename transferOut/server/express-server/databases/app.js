const salt = require('./crypt/crypt');
const mongoUtil = require('./mongo/connection');
const postgres = require('./postgres/queries');
const crypto = require('crypto');


function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }

  

module.exports = {
    postgres: postgres,
    crypto: crypto,
    salt: salt,
    mongoUtil:mongoUtil
}