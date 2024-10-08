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
        },
        minus: function() {
            this.minutes = Math.max(0, this.minutes - 1);
        },
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
