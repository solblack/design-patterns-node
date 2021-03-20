const UserStore = require('./user-store');

const userStore = new UserStore({ name: 'sol'});

const userSubscrition1 = userStore.user$.subscribe(user => {
    console.log(`User subscription 2: user name is: ${user.name}`);
});

userStore.user = { name: 'fabri'};

console.log(userStore.user$.observers);

const userSubscrition2 = userStore.user$.subscribe(user => {
    console.log(`User subscription 2: user name is: ${user.name}`);
});

console.log(userStore.user$.observers);

userSubscrition1.unsubscribe();

userStore.user = { name: 'bruno'};

console.log(userStore.user$.observers);

userSubscrition2.unsubscribe();
console.log(userStore.user$.observers);

userStore.user = { name: 'mimi'};

const userSubscrition3 = userStore.user$.subscribe(user => {
    console.log(`User subscription 3: user name is: ${user.name}`);
});