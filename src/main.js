import Vue from 'vue/dist/vue.js'

// router
import router from 'src/router/router'

// app
import app from 'src/app'


new Vue({
    el: '#app',
    render: function(h) {
        return h(app)
    },
    router
});
