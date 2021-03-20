const Observable = require('./observable');

class UserStore {
    constructor(user){
        if(UserStore._instance instanceof UserStore){
            return UserStore;
        }
        UserStore._instance = this;
        this.user$ = new Observable(user);
    }

    get user(){
        this.user$.value;
    }

    set user(user){
        this.user$.next(user);
    }
}

module.exports = UserStore;