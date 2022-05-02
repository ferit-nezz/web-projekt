import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f6e7f72 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _ffa59216 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _5b7a4440 = () => interopDefault(import('../pages/auth/signin.vue' /* webpackChunkName: "pages/auth/signin" */))
const _324d9754 = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _a5a41b2e = () => interopDefault(import('../pages/events/create.vue' /* webpackChunkName: "pages/events/create" */))
const _7e7695ad = () => interopDefault(import('../pages/events/_slug.vue' /* webpackChunkName: "pages/events/_slug" */))
const _0d43b789 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6f6e7f72,
    name: "about"
  }, {
    path: "/events",
    component: _ffa59216,
    name: "events"
  }, {
    path: "/auth/signin",
    component: _5b7a4440,
    name: "auth-signin"
  }, {
    path: "/auth/signup",
    component: _324d9754,
    name: "auth-signup"
  }, {
    path: "/events/create",
    component: _a5a41b2e,
    name: "events-create"
  }, {
    path: "/events/:slug",
    component: _7e7695ad,
    name: "events-slug"
  }, {
    path: "/",
    component: _0d43b789,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
