import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";

class JotsService {
  // createJot(rawJotFormData) {
  //   const jot = AppState.jots
  //   const newJot = new Jot(rawJotFormData)
  //   jot.push(rawJotFormData)

  // }

  setActiveJot(jotId) {
    const jot = AppState.jots
    const foundJot = jot.find(jot => jot.id == jotId)
    console.log('current active jot', AppState.activeJot);
    AppState.activeJot = foundJot
    console.log('new active jot', AppState.activeJot);
  }
}

export const jotsService = new JotsService()