import type { Plugin } from 'vue'
import type { StarportOptions } from './types'
import { InjectionOptions } from './constants'
import { Starport } from './components/Starport'

export function StarportPlugin(defaultOptions: StarportOptions = {}): Plugin {
  return {
    install(app, ...options) {
      app.provide(InjectionOptions, defaultOptions)
      app.component('Starport', Starport)
      // app.component('StarportCarrier', StarportCarrier)
    },
  }
}
