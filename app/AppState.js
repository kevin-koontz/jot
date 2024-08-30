import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from "./services/Jot.js"
class ObservableAppState extends EventEmitter {

  /**@type {Jot[]} */
  jots = [

  ]



}

export const AppState = createObservableProxy(new ObservableAppState())