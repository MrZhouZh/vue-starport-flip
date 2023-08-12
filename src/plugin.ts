import type { Plugin } from 'vue'
import type { StarportOptions } from './types'
import { InjectionOptions } from './constants'
import { Starport } from './components/Starport'
import { StarportCarrier } from './components/StarportCarrier'

export function StarportPlugin(defaultOptions: StarportOptions = {}): Plugin {
  return {
    install(app) {
      app.provide(InjectionOptions, defaultOptions)
      app.component('Starport', Starport)
      app.component('StarportCarrier', StarportCarrier)
    },
  }
}
