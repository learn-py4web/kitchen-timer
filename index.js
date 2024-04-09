"use strict";

let app = {};

app.data = {    
    data: function() {
        return {
            minutes: 0,
            seconds: 0,
            counter: null,
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
            if (!this.counter) {
                this.seconds = 0;
            }
        },
        minus: function () {
            if (this.minutes > 0) {
                this.minutes--;
            }
            if (!this.counter) {
                this.seconds = 0;
            }
        },
        play: function() {
            let self = this;
            if (!this.counter && (this.minutes > 0 || this.seconds > 0)) {
                this.counter = setInterval(function() {
                    self.seconds--;
                    if (self.seconds < 0) {
                        self.seconds = 59;
                        self.minutes--;
                    }
                    if (self.minutes === 0 && self.seconds === 0) {
                        self.ring();
                        clearInterval(self.counter);
                        self.counter = null;
                    }
                }, 200);
            }
        },
        pause: function() {
            if (this.counter) {
                clearInterval(this.counter);
                this.counter = null;
            }
        },
        stop: function() {
            this.pause();
            this.minutes = 0;
            this.seconds = 0;
        },
        ring: function() {
            let audio = new Audio("ring.mp3");
            audio.play();
        }
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
