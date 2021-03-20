const LoggerService = require('./logger-service');
const Pet = require('./pet');
const User = require('./user');
const PetShopBranch = require('./pet-shop-branch');

const logger = new LoggerService();

logger.log('starting app...');

const sol = new User('Sol');
const bruno = new Pet('dog', 'Bruno');
const fabri = new User('Fabri');
const mimi = new Pet('cat', 'Mimi');

const petShopBranch1 = new PetShopBranch('Miami');
console.log(petShopBranch1.name);
petShopBranch1.addPet(bruno, sol);

const petShopBranch2 = new PetShopBranch('Los Angeles');
console.log(petShopBranch2.name);
petShopBranch2.addPet(mimi, fabri);

petShopBranch1.logPets();

logger.log('closing app...');

console.log(`*** ${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));