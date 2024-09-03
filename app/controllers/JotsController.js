import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JotsController {
  constructor() {
    console.log('Jots controller is working!');

    AppState.on('jots', this.drawJots)
    AppState.on('activeJot', this.drawActiveJot)

    jotsService.loadCars()
    // this.drawJots()
  }


  drawJots() {
    const jots = AppState.jots
    console.log('drawing jots!', jots);
    let JotsHTML = ''
    jots.forEach(jot => JotsHTML += jot.cardHTMLTemplate)
    setHTML('jotsList', JotsHTML)
  }

  drawActiveJot() {
    const activeJot = AppState.activeJot
    setHTML(`activeJot`, activeJot.contentHTMLTemplate)
  }
  setActiveJot(jotsId) {
    console.log('setting active jot', jotsId);
    jotsService.setActiveJot(jotsId)
  }


  updateJot() {
    console.log('textarea blurred');

  }

  createJot() {
    event.preventDefault()
    console.log('Creating jot!');
    const jotForm = event.target
    const jotFormData = getFormData(jotForm)
    console.log('form data', jotFormData);

    jotsService.createJot(jotFormData)
  }

  deleteJot(jotId) {
    const userDeleteJot = window.confirm("Are you sure you want to delete this Jot?")
    if (userDeleteJot == false) {
      return
    }
    console.log('deleting jot', jotId);

    jotsService.deleteJot(jotId)
  }

}