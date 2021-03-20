const LoggerService = require('./logger-service');
const logger = new LoggerService();

class User {
    constructor(name){
        this.name= name;
        logger.log(`New User: a user named ${name} was created`)
    }
}

module.exports = User;