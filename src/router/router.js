/*
 * router
 *
 */

import Vue from 'vue/dist/vue.js'
import vueRouter from 'vue-router'
import routerMap from './router-map'

Vue.use(vueRouter)

const router = new vueRouter({
	routes: routerMap
})
router.beforeEach((to, from, next, abort) => {
	next()
})
router.afterEach((to, from, next) => {})

export default router
