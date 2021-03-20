const PetShop = require('./pet-shop');

class PetShopBrach extends PetShop {

    constructor(name){
        super();
        this.name = name;
    }

}

module.exports = PetShopBrach;