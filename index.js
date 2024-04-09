"use strict";

let app = {};

app.data = {    
    data: function() {
        return {
            minutes: 0,
            seconds: 0,
        };
    },
    computed: {
        time: function() {
            return this.minutes + " : " + this.seconds;
        }
    },
    methods: {
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
