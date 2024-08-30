import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { jotsService } from "../services/JotsService.js";

export class JotsController {
  constructor() {
    console.log('Jots controller is working!');
    this.drawJots()
    AppState.on('activeJot', this.drawActiveJot)
    // this.drawPlaceholder()
  }


  drawJots() {
    const jots = AppState.jots
    console.log('drawing jots!');
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


  // drawPlaceholder() {
  //   const placeholder = AppState.jotsPlaceholder
  //   console.log('drawing placeholder!', placeholder);
  //   setHTML('jotsContent', placeholder.contentHTMLTemplate)
  // }
}