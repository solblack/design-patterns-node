const LoggerService = require('./logger-service');
const logger = new LoggerService();

class Pet {
    constructor(type, name){
        this.type = type;
        this.name= name;
        logger.log(`New Pet: a ${type} named ${name} was created`)
    }
}

module.exports = Pet;