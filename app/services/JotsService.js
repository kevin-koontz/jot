import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";

class JotsService {
  createJot(jotFormData) {
    const jot = AppState.jots
    const newJot = new Jot(jotFormData)
    jot.push(newJot)

    this.saveJots()
  }

  setActiveJot(jotId) {
    const jot = AppState.jots
    const foundJot = jot.find(jot => jot.id == jotId)
    console.log('current active jot', AppState.activeJot);
    AppState.activeJot = foundJot
    console.log('new active jot', AppState.activeJot);
  }

  saveJots() {
    saveState('jots', AppState.jots)
  }

  loadCars() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromLocalStorage
  }
}

export const jotsService = new JotsService()