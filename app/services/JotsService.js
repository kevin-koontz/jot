import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";

class JotsService {
  updateJots(updatedBody) {
    console.log('updatedBody', updatedBody)


    const jot = AppState.activeJot
    console.log('active jot ', jot);


    jot.body = updatedBody
    console.log('updated jot', jot); // -- good to here
    // problem is body is updated, but not persistent through refresh

    this.saveJots()
    AppState.emit('activeJot')

  }

  deleteJot(jotId) {
    const jots = AppState.jots
    const jotIndex = jots.findIndex(jot => jot.id == jotId)
    console.log(jotIndex);

    jots.splice(jotIndex, 1)

    this.saveJots()
  }
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

  loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    AppState.jots = jotsFromLocalStorage
  }
}

export const jotsService = new JotsService()