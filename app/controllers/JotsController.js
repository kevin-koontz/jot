import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JotsController {
  constructor() {
    console.log('Jots controller is working!');

    AppState.on('jots', this.drawJots)
    AppState.on('activeJot', this.drawActiveJot)
    AppState.on('jots', this.drawJotsCount)

    jotsService.loadJots()
    this.drawJotsCount()
  }


  drawJots() {
    const jots = AppState.jots
    console.log('drawing jots!', jots);
    let JotsHTML = ''
    jots.forEach(jot => JotsHTML += jot.cardHTMLTemplate)
    setHTML('jotsList', JotsHTML)
  }
  drawJotsCount() {
    const jots = AppState.jots
    console.log('jots array', jots);
    const jotCount = jots.length
    console.log('Total Jot count:', jotCount);
    setHTML('jotsNumber', jotCount + " Jots")
  }

  drawActiveJot() {
    const activeJot = AppState.activeJot
    setHTML(`activeJot`, activeJot.contentHTMLTemplate)
  }
  setActiveJot(jotsId) {
    console.log('setting active jot', jotsId);
    jotsService.setActiveJot(jotsId)
  }


  createJot() {
    event.preventDefault()
    console.log('Creating jot!');
    const jotForm = event.target
    const jotFormData = getFormData(jotForm)
    console.log('form data', jotFormData);

    jotsService.createJot(jotFormData)
  }

  updateJots() {
    console.log('textarea blurred');
    const textareaElm = event.target
    // @ts-ignore
    const updatedBody = textareaElm.value
    console.log('text from textarea', updatedBody);

    jotsService.updateJots(updatedBody)

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