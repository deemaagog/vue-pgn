import vuepgn from './components/App.vue'

// Install the components
export function install (Vue) {
  Vue.component('vuepgn', vuepgn)
  /* -- Add more components here -- */
}

// Expose the components
export {
  vuepgn,
  /* -- Add more components here -- */
}

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
