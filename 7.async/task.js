class AlarmClock {
    constructor() {
    	this.alarmCollection = [];
    	this.intervalId = null;
    }

    addClock(time, callback) {
        if ((arguments.length != 2) || (time === null) || (callback === null)) {
            throw new Error('Отсутствуют обязательные аргументы');
        } 
        if (this.alarmCollection.find(item => item.time === time)) {
            return console.warn('Уже присутствует звонок на это же время');
        }   
        
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        let timeToDelete = this.alarmCollection.find(item => item.time === time);
        if (timeToDelete) {
            this.alarmCollection.splice(timeToDelete, 1);
        } 
    }

    getCurrentFormattedTime() {
    	return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    start() {
    	if (this.intervalId === null) {
    		this.intervalId = setInterval(() => {
    			this.alarmCollection.forEach(item => {
    				if ((item.time === this.getCurrentFormattedTime()) && (item.canCall = true)) {
    					item.canCall = false;
    					item.callback();
    				}
    			});
    		}, 1000);
    	}
    	return;
    }

    stop() {
    	clearInterval(this.intervalId);
    	return this.intervalId = null;
    }
    
    resetAllCalls() {
        return this.alarmCollection.forEach(item => {item.canCall = true});
    }
    
    clearAlarms() {
        this.stop();
    	return this.alarmCollection = [];
    }
}
