const Observable = require('./observable');

class AppStore {
    constructor(){
        if(AppStore._instance instanceof AppStore){
            return AppStore._instance;
        }
        AppStore._instance = this;
        this.appCounter$ = new Observable(0);
    }

    addRequestCount(){
        this.appCounter$.next(this.appCounter$.value + 1);
    }

    logRequestCount(){
        console.log(`Total requests so far: ${this.appCounter$.value}`);
    }
}

module.exports = AppStore;