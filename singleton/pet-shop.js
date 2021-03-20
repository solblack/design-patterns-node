const LoggerService = require('./logger-service');
const logger = new LoggerService();

class PetShop {

    constructor(){
        if(PetShop._instance instanceof PetShop){
            return PetShop._instance;
        }
        PetShop._instance = this;
        this.pets = [];
    }

    addPet(pet, owner){
        this.pets.push({ pet, owner })
    }

    logPets(){
        logger.logObject(this.pets);
    }
}

module.exports = PetShop;