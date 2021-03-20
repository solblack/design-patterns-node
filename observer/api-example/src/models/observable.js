class Observable {

    constructor(value) {
        this.observers = {}
        this.value = value;
    }

    subscribe(observer) {
        const keys = Object.keys(this.observers);
        const index = keys.length ? +keys[keys.length - 1] + 1 : 1;
        this.observers[index] = observer;
        observer(this.value)
        return { unsubscribe: () => {
            delete this.observers[index];
        }};
    }

    next(value){
        this.value = value;
        this.triggerEvent()
    }

    triggerEvent() {
        Object.values(this.observers).forEach( observer => {
            typeof observer == 'function' ? observer(this.value) : null;   
        })
    }
}

module.exports = Observable;



