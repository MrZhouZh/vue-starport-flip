import type { DefineComponent } from 'vue'
import { defineComponent, getCurrentInstance, h, inject } from 'vue'
import { createInternalState } from '../state'
import { InjectionOptions, InjectionState } from '../constants'
import { StarportCraft } from './StarportCraft'

export const StarportCarrier = defineComponent({
  name: 'StarportCarrier',
  setup(_, { slots }) {
    console.log('::StarportCarrier', InjectionState)
    const state = createInternalState(inject(InjectionOptions, {}))
    const app = getCurrentInstance()!.appContext.app
    app.provide(InjectionState, state)

    return () => ([
      slots.default?.(),
      Array.from(state.portMap.entries())
        .map(([port, { component }]) => h(
          StarportCraft,
          { key: port, port, component },
        )),
    ])
  },
}) as DefineComponent<{}>
