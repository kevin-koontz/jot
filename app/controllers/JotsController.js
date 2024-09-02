import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";

export class JotsController {
  constructor() {
    console.log('Jots controller is working!');

    AppState.on('jots', this.drawJots)

    this.drawJots()
    AppState.on('activeJot', this.drawActiveJot)
    // this.drawPlaceholder()
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


  // drawPlaceholder() {
  //   const placeholder = AppState.jotsPlaceholder
  //   console.log('drawing placeholder!', placeholder);
  //   setHTML('jotsContent', placeholder.contentHTMLTemplate)
  // }
}