import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from "./models/Jot.js"
class ObservableAppState extends EventEmitter {

  /**@type {Jot[]} */
  jots = [
    new Jot({
      title: 'Best Note #1',
      body: 'Best notes you will ever read! In fact, turn back now as you may not be able to handle these notes. This is your final warning! Now on to the best notes you will ever read...',
      createdAt: '08/30/2024',
      updatedAt: 'Last updated 08/30/2024 at 10:00AM',
      color: 'LimeGreen',
    }),
    new Jot({
      title: 'Worst Note #1',
      body: 'Worst notes you will ever read! In fact, turn back now as you may not be able to handle these notes. This is your final warning! Now on to the worst notes you will ever read...',
      createdAt: '08/30/2024',
      updatedAt: 'Last updated 08/30/2024 at 10:30AM',
      color: 'Red'
    }),
    new Jot({
      title: 'Disappointing Note #1',
      body: 'Most disappointing notes you will ever read! In fact, turn back now as you may not be able to handle these notes. This is your final warning! Now on to the most disappointing notes you will ever read...',
      createdAt: '08/30/2024',
      updatedAt: 'Last updated 08/30/2024 at 10:45AM',
      color: 'Pink'
    })
  ]

  /**@type {Jot} */
  activeJot = null


}

export const AppState = createObservableProxy(new ObservableAppState())