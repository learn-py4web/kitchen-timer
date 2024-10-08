"use strict";

let app = {};

app.data = {    
    data: function() {
        return {
            minutes: 0,
            seconds: 0,
            counter: null,
            count_up: null,
        };
    },
    computed: {
        time: function() {
            return this.minutes + " : " + (this.seconds < 10 ? "0" : "") + this.seconds;
        }
    },
    methods: {
        plus: function() {
            this.minutes++;
        },
        minus: function() {
            this.minutes = Math.max(0, this.minutes - 1);
        },
        reset: function() {
            this.pause();
            this.minutes = 0;
            this.seconds = 0;
            this.count_up = null;
        },
        play: function() {  
            let self = this;
            if (!this.counter) {
                if (self.count_up || (this.minutes == 0 && this.seconds == 0))
                {
                    this.count_up = true;
                    this.counter = setInterval(function () {
                        self.seconds++;
                        if (self.seconds > 59) {
                            self.seconds = 0;
                            self.minutes++;
                        }
                    }, 100);
                }
                else
                { 
                    this.count_up = false;               
                    this.counter = setInterval(function () {
                        if (self.seconds > 0 || self.minutes > 0) {
                            self.seconds--;
                            if (self.seconds < 0) {
                                self.seconds = 59;
                                self.minutes--;
                            }
                        } else {
                            clearInterval(self.counter);
                            self.counter = null;
                        }
                    }, 100);
                } 
            }
        },
        pause: function() {
            if (this.counter) {
                clearInterval(this.counter);
                this.counter = null;
            }
        }
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
