class LoggerService{
    constructor(){
        if(LoggerService._instance instanceof LoggerService){
            return LoggerService._instance;
        }
        LoggerService._instance = this;
        this.logs = [];
    }

    get count(){
        return this.logs.length;
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp});
        console.log(`${timestamp} ${message}`);
    }

    logObject(object){
        this.log(`Object logged: ${JSON.stringify(object)}`);
    }
}

module.exports = LoggerService;

